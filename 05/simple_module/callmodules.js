const cm = require('./ownmodules');
const express = require('express');

const app = express();

const port = process.env.port || 8000;

const myuser = require('./mymodules')

app.use(express.json());

app.get('/api/date',(req,res)=>{
    res.write("The current date and time is"+cm.myDateTime());
    res.write("\nReported by "+cm.myName());
    res.end();
    res.send(`Current Date and Time: ${cm.myDateTime()}\nReported by ${cm.myName()}`);
});

app.get('/api/myinfo/:fname/:age/:email',(req,res)=>{
    const fname = req.params.fname;
    const age = req.params.age;
    const email = req.params.email;
    const newUser = new myuser(fname, age, email);
    res.send(newUser.getUserStats());
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`)
});