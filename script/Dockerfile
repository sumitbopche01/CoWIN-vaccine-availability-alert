FROM node:15-alpine

RUN mkdir /script && chown -R node:node /script

WORKDIR /script

USER node

COPY --chown=node:node package*.json ./

RUN npm install --no-optional && npm cache clean --force

COPY --chown=node:node . .

EXPOSE 3456

CMD [ "node", "index.js" ]
