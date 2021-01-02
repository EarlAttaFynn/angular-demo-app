FROM node:alpine AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/angular-demo-app /usr/share/nginx/html

LABEL maintainer="EarlAtta-Fynn"
LABEL description="Practicing docker container deployment"
