const mongoose = require("mongoose");

const connectDB = () => {
    return new Promise((resolve, reject)=>{
        mongoose.connect("mongodb+srv://maffans913_db_user:dbpassword%40mango913@cluster01.g0zspz2.mongodb.net/?appName=Cluster01")
            // "mongodb+srv://maffans913_db_user:dbpassword%40mango913@cluster01.g0zspz2.mongodb.net/
        .then((err)=>{
            console.log("db connected");
            resolve();
        }).catch((err) => {
            reject(err);
    })}
)}

module.exports = connectDB;