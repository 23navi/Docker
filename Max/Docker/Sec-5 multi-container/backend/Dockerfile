FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG USERNAME navi

ARG PASSWORD abc123

ENV MONGO_INITDB_ROOT_USERNAME navi

ENV MONGO_INITDB_ROOT_PASSWORD abc123

ENV PORT 4000

EXPOSE $PORT

CMD ["npm","start"]




# docker build -t node-image ./backend

#cd to backend and then run this
# docker run -p 4000:4000 -d --network webapp --name node_back -v nodetemp:/app/logs -v /app/node_modules -v "$pwd":/app --rm node-image


#Why this doesn't work... how do we combine "$pwd" and /backend???
# docker run -p 4000:4000 -d --network webapp --name node_back -v nodetemp:/app/logs -v /app/node_modules -v "$pwd"/backend:/app --rm node-image


## for mongodb

# docker run -d --network webapp --name mongodb -v mongodata:/data/db --rm -e "MONGO_INITDB_ROOT_USERNAME=navi" -e "MONGO_INITDB_ROOT_PASSWORD=abc123" mongo
