# Define base images and tags
# ---------------------------
ARG DOCKERFILE_BUILD_IMAGE="node"
ARG DOCKERFILE_BUILD_TAG="16.20.0"
ARG DOCKERFILE_BASE_IMAGE=$FCI_DOCKERFILE_BASE_IMAGE
ARG DOCKERFILE_BASE_TAG=$FCI_DOCKERFILE_BASE_TAG

# Build container
# ---------------
FROM $DOCKERFILE_BUILD_IMAGE:$DOCKERFILE_BUILD_TAG AS builder

# Build arguments
ARG NPM_SDK_DEPLOY_URL="/"
ARG NPM_BUILD_ENVIRONMENT="next"
ARG NPM_BUILD_NEXT="next"
ARG NPM_BUILD_LOGLEVEL="error"
ARG CYPRESS_INSTALL_BINARY="0"
ARG NX_NO_CLOUD=true
ARG NX_DAEMON=false
ARG NODE_OPTIONS="--max_old_space_size=4096"

WORKDIR /project

COPY .npmrc /project/

# Set separate cache layers, install pakages
COPY package*.json /project/

RUN set -eu && \
    npm --userconfig /project/.npmrc --color=false --loglevel=$NPM_BUILD_LOGLEVEL --no-progress --parseable \
        install --fetch-retries=4
    # --only=production

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Set separate cache layers, build from sources
COPY ./ /project/
RUN set -eux && \
    npm --color=false --loglevel=$NPM_BUILD_LOGLEVEL --no-progress --parseable \
        run build:"$NPM_BUILD_ENVIRONMENT" -- --deployUrl $NPM_SDK_DEPLOY_URL --baseHref $NPM_SDK_DEPLOY_URL

RUN chgrp -R 0 /project && \
    chmod -R g+rw /project

# Make application container
# --------------------------
FROM $DOCKERFILE_BASE_IMAGE:$DOCKERFILE_BASE_TAG


COPY --from=builder --chown=101:0 /project/dist/apps/doc /www
COPY ./.env /.env
