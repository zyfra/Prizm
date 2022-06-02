# Define base images and tags
# ---------------------------
ARG DOCKERFILE_BUILD_IMAGE="node"
ARG DOCKERFILE_BUILD_TAG="16.13.0"
ARG DOCKERFILE_BASE_IMAGE="registry.dp.zyfra.com/digital-plant/zui-ci-basedockerimage"
ARG DOCKERFILE_BASE_TAG="2.2.2"

# Build container
# ---------------
FROM $DOCKERFILE_BUILD_IMAGE:$DOCKERFILE_BUILD_TAG AS builder

# Build arguments
ARG NPM_GITLAB_REGISTRY_HOST="${CI_SERVER_HOST:-gitdp.zyfra.com}"
ARG NPM_GITLAB_REGISTRY_TOKEN
ARG NPM_BUILD_ENVIRONMENT="storybook"
ARG NPM_BUILD_NEXT="next"
ARG NPM_BUILD_LOGLEVEL="warn"
ARG CYPRESS_INSTALL_BINARY="0"

WORKDIR /project
# Set separate cache layers, npm config
RUN set -euo && \
    npm config set \
        @gitlab:registry \
        "https://$NPM_GITLAB_REGISTRY_HOST/api/v4/packages/npm/" && \
    npm config set \
        "//$NPM_GITLAB_REGISTRY_HOST/api/v4/packages/npm/:_authToken" \
        "$NPM_GITLAB_REGISTRY_TOKEN" \
# Set separate cache layers, build from sources
COPY ./ /project/
# Set separate cache layers, install pakages
COPY package*.json /project/

RUN npm --color=false --loglevel=$NPM_BUILD_LOGLEVEL --no-progress --parseable \
        install
# Set separate cache layers, build from sources
COPY ./ /project/
RUN npm --color=false --loglevel=$NPM_BUILD_LOGLEVEL --no-progress --parseable \
    run --verbose build:"$NPM_BUILD_ENVIRONMENT" && \
    chgrp -R 0 /project && \
    chmod -R g+rw /project

RUN npm --color=false --loglevel=$NPM_BUILD_LOGLEVEL --no-progress --parseable \
    run --verbose build:"$NPM_BUILD_NEXT" && \
    chgrp -R 0 /project && \
    chmod -R g+rw /project

# Make application container
# --------------------------
FROM $DOCKERFILE_BASE_IMAGE:$DOCKERFILE_BASE_TAG

COPY --from=builder --chown=101:0 /project/dist/storybook/components /www/storybook
COPY --from=builder --chown=101:0 /project/dist/apps/doc /www/doc
COPY ./.env /.env
