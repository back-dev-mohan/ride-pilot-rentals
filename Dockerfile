
FROM node:18-alpine AS build

WORKDIR /rental-app

COPY package*.json ./

# copy everything inside container dir
RUN npm ci

COPY . .

RUN npm run build
# stage 2 

FROM node:18-slim

WORKDIR /rental-app

COPY --from=build /rental-app/dist ./dist

COPY package*.json ./

RUN npm ci

EXPOSE 4173

CMD ["npm", "run","dev","preview","--","--host"]

