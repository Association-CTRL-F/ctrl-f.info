FROM node:24-alpine3.22 AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./
COPY . .
ENV NODE_ENV=production
RUN pnpm run build

FROM nginx:alpine AS production
RUN apk add --no-cache curl
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
	CMD curl -f http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]

