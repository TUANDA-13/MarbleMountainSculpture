# Step 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Run with only needed files
FROM node:18-alpine
WORKDIR /app

# Copy built app only
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

# Optional: if your app uses .env.production
# COPY --from=builder /app/.env.production ./

EXPOSE 3000
CMD ["node", "server.js"]