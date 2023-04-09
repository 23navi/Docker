FROM node

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","start"]




# docker build -t front-image .

# docker run -p 3000:3000 -d --network webapp --name front --rm front-image