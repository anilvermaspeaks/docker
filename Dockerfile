FROM node

WORKDIR /app


# first . will tel all folder subfolder should get copied in image
#second . path inside image where all files will be put

COPY package.json ./

RUN npm install

COPY . ./

#optional but good for documenation purpose
EXPOSE 3000

CMD [ "node", "app.js" ]