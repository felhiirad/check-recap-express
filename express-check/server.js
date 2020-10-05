const express = require('express')
const pug =require('pug')
const app = express()


app.set('view engine',pug) 
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    let date =new Date()
    if (date.getDay()!==0 && date.getDay()!==6 && date.getHours>=9 && date.getHours <=17){
        console.log('we are open')
        next();
    }else{
        console.log('we are closed');
        next();
    }
})


 app.get('/contact',(req,res)=>{
     res.render('Contact.pug')
 })
 app.get('/home',(req,res)=>{
     res.render('Home.pug')
 })
 app.get('/service',(req,res)=>{
     res.render('Service.pug')
 })
 
app.listen(3000,(err)=>{
    if(err){
        console.log('connection failed');
    }else{
        console.log('connection succes \nhttp://localhost:3000')
    }
})