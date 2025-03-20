FROM node

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install && \
    npm install swiper react-id-swiper

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]


