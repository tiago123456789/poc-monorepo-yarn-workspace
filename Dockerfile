FROM node:18.20-alpine3.20
ARG BUILD_CONTEXT

WORKDIR /base

COPY package.json .

COPY yarn.lock .

COPY ./apps/$BUILD_CONTEXT/package.json apps/$BUILD_CONTEXT/

COPY ./packages/common packages/common/

RUN yarn install

COPY ./apps/$BUILD_CONTEXT apps/$BUILD_CONTEXT

CMD ["node", "index.js"]