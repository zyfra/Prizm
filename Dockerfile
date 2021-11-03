# Define base images and tags
# ---------------------------
ARG DOCKERFILE_BUILD_IMAGE="node"
ARG DOCKERFILE_BUILD_TAG="14.17.1"
ARG DOCKERFILE_BASE_IMAGE="registry.dp.zyfra.com/digital-plant/zui-ci-basedockerimage"
ARG DOCKERFILE_BASE_TAG="2.0.0"

# Build container
# ---------------
FROM $DOCKERFILE_BUILD_IMAGE:$DOCKERFILE_BUILD_TAG AS builder

# Build arguments
ARG NPM_REGISTRY_URL="https://nexus.dp.zyfra.com/repository/npm-proxy/"
ARG NPM_GITLAB_REGISTRY_HOST="${CI_SERVER_HOST:-gitdp.zyfra.com}"
ARG NPM_GITLAB_REGISTRY_TOKEN
ARG NPM_BUILD_ENVIRONMENT="all"
ARG NPM_BUILD_LOGLEVEL="warn"

WORKDIR /project
# Set separate cache layers, npm config
RUN set -euo && \
    npm config set registry "$NPM_REGISTRY_URL" && \
    npm config set \
        @gitlab:registry \
        "https://$NPM_GITLAB_REGISTRY_HOST/api/v4/packages/npm/" && \
    npm config set \
        "//$NPM_GITLAB_REGISTRY_HOST/api/v4/packages/npm/:_authToken" \
        "$NPM_GITLAB_REGISTRY_TOKEN"
# Set separate cache layers, install pakages
COPY package*.json /project/

RUN npm install -g @angular/cli@12.0.4

RUN npm --color=false --loglevel=$NPM_BUILD_LOGLEVEL --no-progress --parseable \
        install
# Set separate cache layers, build from sources
COPY ./ /project/
RUN npm --color=false --loglevel=$NPM_BUILD_LOGLEVEL --no-progress --parseable \
    run build:"$NPM_BUILD_ENVIRONMENT" && \
    npx nx run components:doc && \
    npx nx run components:build-storybook && \
    chgrp -R 0 /project && \
    chmod -R g+rw /project

# Make application container
# --------------------------
FROM $DOCKERFILE_BASE_IMAGE:$DOCKERFILE_BASE_TAG

COPY --from=builder --chown=101:0 /project/dist/storybook/components /www
COPY ./.env /.env
