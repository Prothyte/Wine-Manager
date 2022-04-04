FROM node:14-alpine as angular

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=angular /app/dist/app /usr/share/nginx/html
