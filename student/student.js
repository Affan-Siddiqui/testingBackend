
const express = require('express');
const Router = express.Router();

let data = [
    {
        id : 1,
        name : 'ali',
        age : 15,
    },
    {
        id : 2,
        name : 'adeel',
        age : 13
    },
    {
        id : 3,
        name : 'rehab',
        age : 15,
    }
]

Router.get("/", (req, res) => {
    res.json(data);
})

Router.get("/:id", (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.json(data.find((x) => x.id == id));
})

module.exports = Router;