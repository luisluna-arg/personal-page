# Development Dockerfile for gym app
FROM node:20-alpine

WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Install dependencies inside container (required for native Linux binaries)
RUN npm ci --legacy-peer-deps --no-audit --no-fund || npm install --legacy-peer-deps --no-audit --no-fund

# Expose port
EXPOSE 3000

# Command for development
CMD ["npm", "run", "dev"]
