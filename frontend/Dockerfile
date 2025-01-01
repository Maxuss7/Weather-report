# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 5173

# Start the application using Vite's development server
CMD ["npm", "run", "dev"]

