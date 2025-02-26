FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Create necessary directories
RUN mkdir -p docs/.vitepress/dist

# Expose VitePress default port
EXPOSE 5173

# Set host to 0.0.0.0 to allow external access
ENV VITE_HOST=0.0.0.0

CMD ["npm", "run", "docs:dev", "--", "--host", "0.0.0.0"]
