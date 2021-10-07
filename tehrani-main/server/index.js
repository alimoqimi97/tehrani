//import Express from 'express';
// const Express = require('express');
// const mysql = require('mysql');
// const dbInfo = require('./dbConfig.js');
// let multer = require('multer');
// let cors = require('cors');
// const { user } = require('./dbConfig.js');

import Express from 'express';
import mysql from 'mysql';
import dbInfo from './dbConfig.js';
import multer from 'multer';
import cors from 'cors';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// import  {user }  from './dbConfig.js';



let app = Express();

app.use(Express.json());
app.use(cors());
// app.use(Express.static('images'));
app.use('/images',Express.static(__dirname + '/images'));



let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./images');
    },
    filename: (req,file,cb) => {
        // cb(null,`${Date.now()}-${file.originalname}`);
        cb(null,file.originalname);
    }
});

// let upload = multer({storage: storage}).array('file');
let upload = multer({storage: storage}).single('file');

let connection = mysql.createConnection({
    host: dbInfo.host,
    user: dbInfo.user,
    password: dbInfo.password,
    database: dbInfo.database
});

let visitorsNumber = 0;


connection.connect(err => {
    if(err){
        throw err;
    }else{
        console.log("connected to db successfully.");
        connection.query('CREATE DATABASE IF NOT EXISTS tehrani;',(err,result) => {
            if(err) throw err;
            console.log('tehrani database created successfuly');
        });
    }

});


connection.query('CREATE TABLE IF NOT EXISTS Users ( `username` varchar(15), `password` varchar(15), `phone` varchar(12), `id` int(1));',(err,rows,fields) => {
    if(err){
        console.error("can't create 'Users' table!",err);
    }else{
        console.log('Users table created successfully.');
    }
});

connection.query('CREATE TABLE IF NOT EXISTS clothes ( Name varchar(20) , Price int, Id int , Sizes varchar(20) , Colors varchar(20) , Description varchar(100),Category varchar(10) , flag varchar(20), filename varchar(100));',(err) => {
    if(err){
        console.error("can't create clothes table!",err);
    }else{
        console.log("clothes table created successfully.");
    }
});

connection.query('CREATE TABLE IF NOT EXISTS productsImgs ( `prdcId` INT , `filename` varchar(30) );',
                    (err) => {
                        if(err){
                            console.error("can't create productImgs table.",err);
                        }else{
                            console.log("productsImgs created successfully");
                        }
});




app.get('/',(req, res) => {
    ++visitorsNumber;
    res.send("Welcome");
});



app.get('/api/users',(req,res) => {
    
    connection.query("select * from users;",(err,results) => {
        if(err){
            console.error("can't get all users!",err);
        }else{

            res.send(results);
            console.log("all users get successfully.");
            console.log("results = " , results);
        }
    });
});

app.get('/api/users/:username',(req,res) => {
    const usrnm = req.params.username;
    let user;

    console.log(usrnm);

    //  remember that get this info from db
    connection.query(`select * from users where username = '${usrnm}' ;`,(err,rows,fields) => {
        if(err){
            console.error("can't get user info from users table!",err);
        }else{
            user = rows[0];
        }

        if(!user){
            res.status(404).send("can't find any username match this");
        }
    
        res.send(user);    
        
    });


    // if(!user){
    //     res.status(404).send("can't find any username match this");
    // }

    // res.send(user);
});

//  
app.post('/api/users',(req,res) => {

    //  newUser = {username: ... , password: ... , phone: ... }

    const newUser = req.body;

    if(!newUser){
        console.log("received info is empty.");
        res.send("received info is empty");
    }else{
        connection.query(`INSERT INTO users VALUES( ${newUser.username},${newUser.password},${newUser.phone},${newUser.id});`,(err) => {
            if(err){
                console.error("can't add new user",err);
            }else{
                console.log("new user added successfully.");
                res.send("user added succussfully.");
            }
        });
    }
});

//  upload clothes images
app.post('/api/clothes/upload',(req,res) => {
    upload(req,res,(err) => {
        if(err instanceof multer.MulterError){
            console.log(err);
            return res.status(500).json(err);
        }else if(err){
            console.log(err);
            return res.status(500).json(err);
        }

        return res.status(200).send(req.file);
    });
});

// receives the product image filename and product id and saves is in db with id.
app.post('/api/clothes/upload/filename',(req,res) => {
    let {productId , filename} = req.body;

    console.log("productId = " + productId);
    console.log("filename = " + filename);

    connection.query(`INSERT INTO productsImgs VALUES ( '${productId}' , '${filename}' );`,(err) => {
        if(err){
            console.error("can't save filename of product image",err);
            res.status(500).send("can't save filename of product image");
        }else{
            res.status(200).send(filename);
        }
    });
});

//  get all clothes data.
app.get('/api/clothes',(req,res) => {

    connection.query('SELECT * FROM clothes;',(err,results) => {
        if(err){
            console.error("can't get clothes data",err);
            res.status(500).send("can't select clothes from database");
        }else{
            if(results.length === 0){
                res.send("clothes set is empty!");
            }else{
                res.status(200).send(results);
            }
            
        }
    });
});

//  get cloth data.
app.get('/api/clothes/:id',(req,res) => {
    const cId = parseInt(req.params.id);

    connection.query(`SELECT * FROM clothes WHERE Id = ${cId}`,(err,results) => {
        if(err){
            console.error("can't get cloth data",err);
            res.send("can't get cloth.");
        }else {
            // if we received valid id:
            if(!results || results.length != 0){
                res.send(results);
            }else{
                res.status(404).send("can't find any id match this!");
            }
        }
    });
});


//  get clothes data according to flag
app.get('/api/clothes/with-flag/:flag',(req,res) => {
    // const cId = parseInt(req.params.id);
    const cFlag = req.params.flag;

    connection.query(`SELECT * FROM clothes WHERE flag = '${cFlag}'`,(err,results) => {
        if(err){
            console.error("can't get cloth data",err);
            res.status(500).send("can't get cloth.");
        }else {
            // if we received valid id:
            if(!results || results.length != 0){
                res.send(results);
            }else{
                res.status(404).send("can't find any id match this!");
            }
        }
    });
});


//  get clothes data according to category
app.get('/api/clothes/with-category/:cat',(req,res) => {
    // const cId = parseInt(req.params.id);
    const cCat = req.params.cat;

    connection.query(`SELECT * FROM clothes WHERE category = '${cCat}'`,(err,results) => {
        if(err){
            console.error("can't get cloth data",err);
            res.status(500).send("can't get cloth.");
        }else {
            // if we received valid id:
            if(!results || results.length != 0){
                res.send(results);
            }else{
                res.status(404).send("can't find any id match this!");
            }
        }
    });
});



// create new product
app.post('/api/create-cloth',(req,res) => {
    const newCloth = req.body;

    connection.query('SELECT COUNT(Id) AS COUNT FROM clothes;',(err,results) => {
        if(err){
            console.error("can't create new id.",err);
        }else{
            let newId = results[0].COUNT + 1;

            newCloth.Id = newId;

            if(!newCloth){
                res.send("anything received.");
            }else{
                connection.query(`INSERT INTO clothes VALUES ('${newCloth.Name}' , ${newCloth.Price},${newCloth.Id},'${newCloth.Sizes}','${newCloth.colors}','${newCloth.Description}', '${newCloth.Category}','${"none"}','${newCloth.imgFilename}');`,(err) => {
                    if(err){
                        console.error("can't add new cloth.",err);
                        res.status(404).send("can't add new cloth.");
                    }else{
                        console.log("newCloth Name = " + newCloth.Name);
                        res.send(newCloth);
                    }
                });
            }
        
        }
    });

    // if(!newCloth){
    //     res.send("anything received.");
    // }else{
    //     connection.query(`INSERT INTO clothes VALUES ('${newCloth.Name}' , ${newCloth.Price},${newCloth.Id},'${newCloth.Sizes}','${newCloth.colors}','${newCloth.Description}');`,(err) => {
    //         if(err){
    //             console.error("can't add new cloth.",err);
    //             res.status(404).send("can't add new cloth.");
    //         }else{
    //             console.log("newCloth Name = " + newCloth.Name);
    //             res.send(newCloth);
    //         }
    //     });
    // }
});

const port = 4000;

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
});
