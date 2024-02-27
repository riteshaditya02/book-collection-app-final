const express = require('express');
const asynHandler = require('express-async-handler')
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const authMiddleware = require('../middlewares/authMiddleware');

const usersRoute = express.Router();


//Register
usersRoute.post('/register',asynHandler(async (req, res)=>{
    const {name, email, password} = req.body;

    const userExists = await User.findOne({email: email});
    if(userExists){
        throw new Error('User Exist');
    }
    const userCreated = await User.create({name, email, password});

    res.json({
        _id: userCreated._id,
        name: userCreated.name,
        password: userCreated.password,
        email: userCreated.email,
        token: generateToken(userCreated._id),
    })

}));

//Login
usersRoute.post('/login',asynHandler(async(req, res)=>{
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(user && (await user.isPasswordMatch(password))){
            //set status code
            res.status(200);
            res.json({
                _id: user._id,
                name: user.name,
                password: user.password,
                email: user.email,
                token: generateToken(user._id),
            })
        }else{
            res.status(401);
            throw new Error('Invalid Credentials')
        }
}));

// Update users
usersRoute.put('/update',authMiddleware, (req, res)=>{
    res.send('Update Route')
})

//Delete user
usersRoute.delete('/:id',(req, res)=>{
    res.send('Delete Route')
})

//Fetch users
usersRoute.get('/',authMiddleware, (req, res)=>{
    res.send(req.user);
})

module.exports = usersRoute;