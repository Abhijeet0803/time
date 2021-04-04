const rp = require('request-promise');
const cheerio = require('cheerio');
const express = require("express");
const app = express();
const url = 'https://time.com';

const arr = [];



app.get("/getTimeStories", (req, res) => {
    rp(url)
  .then(function(html){
    //success!
    const $ = cheerio.load(html);
   const lists = $('.homepage-module.latest ol li').each((i,list) => {
       const title = $(list).find('a').text();
       const link = $(list).find('a').attr('href');
       
       const obj = {
           title: title,
           link: url+link
       }
       
       arr.push(obj);
       
   });
    res.send(arr);
  })
  .catch(function(err){
    //handle error
  });
})


  app.listen("3000", () => {
      console.log("server started");
  })