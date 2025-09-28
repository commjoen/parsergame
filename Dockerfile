# Use Node.js 24 Alpine as the base image for a lightweight container
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first for better layer caching
COPY package.json ./

# Install dependencies (including a simple HTTP server)
RUN npm install --only=production && npm cache clean --force

# Copy all application files
COPY . .

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port 3000
EXPOSE 3000

# Health check to ensure the container is running properly
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the application using a simple HTTP server
CMD ["npx", "serve", "-s", ".", "-l", "3000"]