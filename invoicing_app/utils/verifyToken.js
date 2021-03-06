var jwt = require('jsonwebtoken');

exports.verifytoken = (req,res,next) => {
    let token= req.headers.authorization;
    
    if(!token) {
        const err=new Error('Authorization falied: you need to login in order to do oprations on api!!!');
        err.status=403;
        return next(err);
    }
    const secretkey=process.env.SECRETKEY ||'12345678';

    jwt.verify(token,secretkey,(err, decoded) => {
        if(err) {
            console.log( err.message)
            err.status=401;
            return next(err);
        }
        else {
            //setting up req.user property
            console.log(decoded);
            req.user=decoded.email;
            return next();
        }
    })
};