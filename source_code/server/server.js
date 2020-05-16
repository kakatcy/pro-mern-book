const express = require('express');
const app = express();
app.use(express.static('public'));   //visit static file under public directory
app.listen(3000,function(){
    console.log('App started on port 3000');
});