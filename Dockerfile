FROM node:slim as builder
ADD ./package.json /app/package.json
RUN cd /app && npm install
ADD . /app
WORKDIR /app
RUN npm run build


FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 80