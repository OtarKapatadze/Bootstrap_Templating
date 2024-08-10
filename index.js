const express = require('express');
const app  = express();
const port = 3000;
const path = require('path');
const redditData = require('./data.json');


app.use(express.static(path.join(__dirname,'public')))

app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
 res.render('home', {title: 'home'})
})

app.get('/cats',(req,res)=>{
 const cats = ['Blue','Rocket','Monty','Stephanie','Winston'];
 res.render('cats', {allCats: cats, title: 'cats'})
})

app.get('/r/:subreddit', (req,res)=>{
 const { subreddit } = req.params;
 const data = redditData[subreddit]
 if (data){
 res.render('subreddit',{...data, title: subreddit})
 }else{
  res.render('notfound',{title: subreddit})
 }
})

app.get('/rand',(req,res)=>{
 const num = Math.floor(Math.random()*6)+1;
 res.render('random', {num, title: 'random'})
})


app.listen(port, ()=>{
 console.log( `PORT 3000 LISTEN!`)
})