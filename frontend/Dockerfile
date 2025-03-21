FROM node

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]


