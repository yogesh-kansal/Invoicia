const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');
const {validateUser} =require('../utils/custom_validates');

exports.signup=catchAsync(async (req,res,next) => {

    let errs=validateUser(req.body);
  //  console.log(errs);

    if(errs!=null) {
        res.status(403).json({
            status:'ERR',
            errs
        })
        return ;
    }

    const user=await User.findOne({email: req.body.email});

    if(user) {
        return next(new appError(`User with Email id ${req.body.email} already exists!!!`,403));
    }

    let newUser = new User({
        password: bcrypt.hashSync(req.body.password,10),
        email: req.body.email,
    });

    await newUser.save();
    res.status(200).send(`user with email: ${newUser.email} has been signed up successfully`);
});


exports.login=catchAsync(async (req,res,next) => {

    const email=req.body.email;
    const pass=req.body.password;

    const user=await User.findOne({email: email});

    if(!user) {
        return next(new appError('User not found!!!!',404));
    }

    const isMatched=bcrypt.compareSync(pass, user.password);

    if(!isMatched) {
        return next(new appError('Incorrect password!!!',403));
    }

    //token expires in 1 hour
    const secretkey=process.env.SECRETKEY ||'12345678';
    const token = jwt.sign(
        {email},
        secretkey,
        {expiresIn:60*60*1000}
    );

    res.status(200).json({
        message:'logged in successfully!!!',
        token
    });
});
