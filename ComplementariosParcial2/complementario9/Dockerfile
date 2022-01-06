FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
EXPOSE 5000
ENTRYPOINT [ "npm", "start"]