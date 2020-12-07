// var http = require("http");
// var url = require("url");
// var express = require('express');
// var app = express();
// var bytes = require('utf8-bytes');
// var crypto = require('crypto');
// const bodyparser = require("body-parser");
// const cors = require("cors");
const app = require("..")

// app.post('/embeddetail/get', function (req, response) {
//   var embedQuerString = req.body.embedQuerString;
//   var dashboardServerApiUrl = req.body.dashboardServerApiUrl;

//   embedQuerString += "&embed_user_email=" + userEmail;
//   var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQuerString.toLowerCase());
//   var embedDetailsUrl = "/embed/authorize?" + embedQuerString.toLowerCase()+embedSignature;

//   http.get(dashboardServerApiUrl+embedDetailsUrl, function(res){
//         var str = '';
//         res.on('data', function (chunk) {
//                str += chunk;
//          });
//         res.on('end', function () {
//              response.send(str);
//         });
//   });
// })

// function GetSignatureUrl(queryString){
//   const { BOLDBI_EMBED_SECRET } = config.parsed;

//   var keyBytes = Buffer.from(BOLDBI_EMBED_SECRET);
//   var hmac = crypto.createHmac('sha256', keyBytes);
//   data = hmac.update(queryString);
//   gen_hmac= data.digest().toString('base64');

// return gen_hmac;
// }

// app.get("/",function (request, response) {
//   var pathname = url.parse(request.url).pathname;
//   console.log("Request for " + pathname + " received.");
//   response.writeHead(200);
//   response.end();
// })


