const express = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const User = require('../model/user.js');
const cors = require('cors')

const app = express()
app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const secret = "abcdefghijklmnop";
const saltRounds = 5;

async function handleSignup(req, res) {
    
    const {username, email, password} = req.body
    
    try{
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userDoc = await User.create({
            username,
            email,
            password:hashedPassword
        })

        res.status(201).json({userDoc});
    }
    
    catch(e){
        console.error('Error during signup:', e);
        res.status(500).json({ message: 'Error creating user', e });
    }
}

async function handleLogin(req, res) {
    const {username, password} = req.body;

        const userDoc = await User.findOne({username});
        
        if(!userDoc){
            return res.status(400).json({ message: "No such user exists" });
        }

        
        const isOk = await bcrypt.compare(password, userDoc.password);

        if(isOk){
            jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
                if(err) {
                    throw err
                }
                res.cookie('token', token, { httpOnly: true, path: '/' }).json({
                    id:userDoc._id,
                    username
                })
            })

            // res.json({username, id:userDoc._id})
        }

        else{
            console.log();
            res.status(400).json("wrong credentials")
        }

}


async function handleProfile(req, res){
    const {token} = req.cookies;
    
    if(!token){
        return res.status(401).json({message: 'Token not provided'})
    }
    jwt.verify(token, secret, {}, (err, info) => {
        if(err){
            return res.status(401).json({message: 'unauthorized'})
        }
        res.json(info)
    })
}

function handleLogout(req, res){
    res.cookie('token', '').json('loggedout!!!!!');
}


module.exports = {
    handleSignup,
    handleLogin,
    handleProfile,
    handleLogout
}