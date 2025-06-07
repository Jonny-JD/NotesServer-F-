FROM node:20-alpine AS build


WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine

ENV NODE_ENV=production

USER node
COPY --chown=node:node --from=build /app/dist /usr/share/nginx/html
COPY --chown=node:node nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]