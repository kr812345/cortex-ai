# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./
# If using pnpm, copy pnpm-lock.yaml instead and install pnpm
# RUN npm install -g pnpm && pnpm install

# Copy prisma schema
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Generate Prisma Client
RUN npx prisma generate

# Copy source code and build
COPY . .
# RUN npm run build  # Assuming a build step exists in package.json for TS

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built assets and node_modules from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Start command
CMD ["npm", "start"]
