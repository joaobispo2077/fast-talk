FROM node:16-alpine

WORKDIR /usr/app

COPY . /usr/app

RUN npm install && npm install -g expo-cli

CMD [ "npm", "start" ]