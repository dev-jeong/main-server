FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g pm2
CMD ["pm2-runtime", "app.js"]