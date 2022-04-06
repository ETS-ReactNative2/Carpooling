const { reject } = require('bcrypt/promises');
const crypto = require('crypto');

exports.createRandomBytes = () => 
new Promise((resolve , resject)=> {
    crypto.randomBytes(30, (err, buff)=> {
       if(err) reject(err);

       const token = buff.toString('hex');
       resolve(token)
    });
});

exports.sendError = (res, error, status = 401) => {
    res.status(status).json({ success: false , error});
};







