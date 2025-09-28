# Use Node.js 24 Alpine as the base image for a lightweight container
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy all application files
COPY . .

# Create a simple HTTP server script
RUN echo '#!/usr/bin/env node' > server.js && \
    echo 'const http = require("http");' >> server.js && \
    echo 'const fs = require("fs");' >> server.js && \
    echo 'const path = require("path");' >> server.js && \
    echo '' >> server.js && \
    echo 'const server = http.createServer((req, res) => {' >> server.js && \
    echo '  let filePath = "." + req.url;' >> server.js && \
    echo '  if (filePath === "./") filePath = "./index.html";' >> server.js && \
    echo '  ' >> server.js && \
    echo '  const extname = String(path.extname(filePath)).toLowerCase();' >> server.js && \
    echo '  const mimeTypes = {' >> server.js && \
    echo '    ".html": "text/html",' >> server.js && \
    echo '    ".js": "text/javascript",' >> server.js && \
    echo '    ".css": "text/css",' >> server.js && \
    echo '    ".json": "application/json",' >> server.js && \
    echo '    ".svg": "image/svg+xml"' >> server.js && \
    echo '  };' >> server.js && \
    echo '  ' >> server.js && \
    echo '  const contentType = mimeTypes[extname] || "application/octet-stream";' >> server.js && \
    echo '  ' >> server.js && \
    echo '  fs.readFile(filePath, (error, content) => {' >> server.js && \
    echo '    if (error) {' >> server.js && \
    echo '      if (error.code === "ENOENT") {' >> server.js && \
    echo '        res.writeHead(404);' >> server.js && \
    echo '        res.end("File not found");' >> server.js && \
    echo '      } else {' >> server.js && \
    echo '        res.writeHead(500);' >> server.js && \
    echo '        res.end("Server error: " + error.code);' >> server.js && \
    echo '      }' >> server.js && \
    echo '    } else {' >> server.js && \
    echo '      res.writeHead(200, { "Content-Type": contentType });' >> server.js && \
    echo '      res.end(content, "utf-8");' >> server.js && \
    echo '    }' >> server.js && \
    echo '  });' >> server.js && \
    echo '});' >> server.js && \
    echo '' >> server.js && \
    echo 'const PORT = 3000;' >> server.js && \
    echo 'server.listen(PORT, "0.0.0.0", () => {' >> server.js && \
    echo '  console.log(`Server running at http://0.0.0.0:${PORT}/`);' >> server.js && \
    echo '});' >> server.js && \
    chmod +x server.js

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

# Start the application using our custom server
CMD ["node", "server.js"]