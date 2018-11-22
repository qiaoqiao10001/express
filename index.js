const express = require('express')
const app = express();

app.get('/title',(req,res) => {

  res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
  res.send({
    'name':'爆炸新闻啦',
    'time':'2022-2-22'
  })
});
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);
app.listen(8888,() => {console.log('listent at 8888')})