FROM node:20-alpine
LABEL name="Sepid Landing"
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install

ARG NEXT_SHARP_PATH
ARG NEXT_PUBLIC_GOFTINO_TOKEN
ARG NEXT_PUBLIC_CLARITY_TOKEN
ARG NEXT_PUBLIC_GTM_ID
ARG SENTRY_AUTH_TOKEN
ARG SENTRY_DNS
ARG NEXT_PUBLIC_SENTRY_DNS

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]