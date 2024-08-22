FROM node
WORKDIR /app
COPY . /app
Run npm install
EXPOSE 8000
CMD ["npm" ,"start"]
