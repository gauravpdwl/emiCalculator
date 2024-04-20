FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

# Optional: Build for production if needed
# RUN npm run build

COPY . .

EXPOSE 80 

CMD ["node", "server.js"]