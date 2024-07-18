FROM node:18-alpine

COPY package.json .
COPY . .

RUN npm install 
EXPOSE 3000
CMD ["npm", "start"]
