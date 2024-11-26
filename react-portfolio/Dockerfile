# Stage 1: Build the React app
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy built files from Stage 1 to Nginx's default public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
