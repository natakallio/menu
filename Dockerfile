FROM node:alpine AS builder
WORKDIR /app
RUN npm install react-scripts -g
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
