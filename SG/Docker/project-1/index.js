const express = require("express");
const redis = require("redis");



const clinet = redis.createClient({host:'redis-server',port:6379});


clinet.set("visits",0);

//testtt


const app = express();

app.get("/", async(req, res) => {
  const visits= clinet.get("visits",(e,r)=>{
    res.send("Page visits: "+r);
    clinet.set("visits",(+r)+1);
  })
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
