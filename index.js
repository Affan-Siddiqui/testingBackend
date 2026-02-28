

const express = require('express');
const app = express();

const connectDB = require("./config/db");
const Student = require('./student/student');

let data = [
    {
        id : 1, 
        name : 'ALi'
    },
    {
        id : 2, 
        name : 'ADAM'
    },
    {
        id : 1, 
        name : 'ALAN'
    }
]


app.use("/student", Student);

app.get('/', (req, res) => {
    res.send('This is main')
})

app.get('/', (req, res) => {
    res.json(data);
})

app.get('/abc', (req, res) => {
    res.send("welcome to abc");
})

connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server has started at : http://localhost:5000");  
        console.log('db is connected');
    })
}).catch((err) => {
    console.log(err);
})