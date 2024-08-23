#docker build -t frontend .
#docker run -d -p 3000:3000 frontend

# Start your image with a node base image
FROM node:18-alpine AS builder

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install dependencies first to take advantage of Docker layer caching
RUN npm install

# Copy local directories to the current working directory of our docker image (/app)
COPY . .

# Build the app, remove node_modules, and reinstall serve globally


# Expose the port the app runs on
EXPOSE 3000

# Start the app using serve command
CMD ["npm" , "run", "start"]
