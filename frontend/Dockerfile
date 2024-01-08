FROM node:lts as build

WORKDIR /app
COPY frontend/ .
COPY package-*.json /app

RUN npm ci

EXPOSE 3000
CMD ["npm", "start"]