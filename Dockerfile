FROM node:slim as builder
ADD ./package.json /app/package.json
RUN cd /app && npm install
ADD . /app
WORKDIR /app
CMD npm run start