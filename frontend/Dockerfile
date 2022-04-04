FROM node:14-alpine as angular

RUN mkdir /opt/winemanager_frontend

WORKDIR /opt/winemanager_frontend

COPY ./winemanager_frontend/* /opt/winemanager_frontend/

RUN npm install

FROM nginx:alpine
COPY --from=angular /opt/winemanager_frontend /usr/share/nginx/html
