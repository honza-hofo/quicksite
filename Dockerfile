FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 10000
ENV PORT=10000
CMD ["npx", "next", "start", "-p", "10000"]
