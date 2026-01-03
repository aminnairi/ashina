FROM node:25.2.1-alpine3.22 AS build

USER node

WORKDIR /home/node

COPY --chown=node:node . .

RUN npm install && npm --workspace apps/client run build

FROM node:25.2.1-alpine3.22 AS production

USER node

WORKDIR /home/node

COPY --chown=node:node . .

COPY --chown=node:node --from=build /home/node/apps/client/dist /home/node/apps/client/dist

RUN npm install --omit=dev

CMD [ "npm", "--workspace", "apps/server", "start" ]
