// step 1 create object express
const express = require('express');
const { text } = require('body-parser');
const { response } = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
const itStudents=[
    {id:21,'fname':'พัชรพล','lname':'นวลจันทร์','tel':'0812345678'},
    {id:33,'fname':'แทนรัก','lname':'มังคละคุปต์','tel':'0698745630'},
    {id:42,'fname':'ชาลิสา','lname':'เทพดนตรี','tel':'0987412365'},
    {id:45,'fname':'เสฎฐนันท์','lname':'อรรถสิษฐ์','tel':'0875321594'},
    {id:47,'fname':'วิรัลยุพา','lname':'ถมรุ่ง','tel':'0785214569'}
];

//api, routing

app.get('/api/getstudent',(req,res)=>{
    res.send(itStudents);
});

app.get('/api/querystu',(req,res)=>{
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length != 0){
        const stuId = itStudents.find(element => element.id == parseInt(myQueryString.id));
        if(stuId){
            res.send(stuId);
        }else{
            res.status(404).send('ไม่พบรหัสนี้')
        }
    }else{
        res.status(404).send('ไม่พบ API นี้');
    }
});

app.get('/api/getstuid/:id',(req,res)=>{
    const stuId = itStudents.find(element => element.id == parseInt(req.params.id));
    if(stuId){
        res.send(stuId);
    }else{
        res.status(404).send('ไม่พบรหัสนี้')
    }
});

//step 3 listen
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`)
});