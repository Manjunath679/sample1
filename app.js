const  express = require('express');
const app= express();
const port = process.env.PORT||3000;
const ejs = require('ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}`);
})