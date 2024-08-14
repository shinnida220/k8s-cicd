# Use the official Node.js slim image as the base image
FROM node:18-slim

# Set environment variables to minimize vulnerabilities
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml into the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --prod

# Copy the rest of the application code into the working directory
COPY . .

# Reduce image size by removing unnecessary files (if applicable)
RUN rm -rf /usr/src/app/animal.test.js

# Set proper permissions
RUN chown -R node:node /usr/src/app

# Switch to non-root user
USER node

# Expose the port your application runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "app.js"]
