const nodemailer = require('nodemailer');

exports.generateOTP = () =>{
    let otp = ''
  for(let i=0; i<=3; i++){
    const randVal = Math.round(Math.random() * 9)
    otp = otp + randVal
  }
  return otp;
}

exports.mailTransport = () =>
nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD
        }
      });

exports.EmailTemplate = code => {
  return `
  <!DOCTYPE html>
  <html lang = "en">
  <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <style>
     @meta only screen and (max-width: 620px){
       h1{
         font-size:20px;
         padding:5px;
       }
     }
    </style>
  </head>
  <body>
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
    <p style=""width: 80px; margin: 0 auto; font-weight: bold;
    text-aligh: center; background: #f6f6f6; border-radius: 5px;
    font-size: 25px;">${code}</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">324457</h2>
    <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Your Brand Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>
  </body>
  </html>`
  
};


exports.plainEmailTemplate = (heading, message) => {
  return`
  <!DOCTYPE html>
  <html lang = "en">
  <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <style>
     @meta only screen and (max-width: 620px){
       h1{
         font-size:20px;
         padding:5px;
       }
     }
    </style>
  </head>
  <body>
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <h1>Emailed Verified successfully</h1>
      <h1>Thanks for connecting with us</h1>
      
  </div>
    
    </div>
  </div>
</div>
  </body>
  </html>`
};

exports.generatePasswordResetTemplate = url => {
  return`
  <!DOCTYPE html>
  <html lang = "en">
  <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <style>
     @meta only screen and (max-width: 620px){
       h1{
         font-size:20px;
         padding:5px;
       }
     }
    </style>
  </head>
  <body>
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <a href="${url}" style=""width: 80px; margin: 0 auto; font-weight: bold;
  text-aligh: center; background: #f6f6f6; border-radius: 5px;
  font-size: 25px;">Reset Password</p>    
      
  </div>
    
    </div>
  </div>
</div>
  </body>
  </html>`
};

exports.plainTemplate = (heading, message) => {
  return`
  <!DOCTYPE html>
  <html lang = "en">
  <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <style>
     @meta only screen and (max-width: 620px){
       h1{
         font-size:20px;
         padding:5px;
       }
     }
    </style>
  </head>
  <body>
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <h1>Password reset successfully</h1>
      <h1>Now you can login with new password</h1>
      
  </div>
    
    </div>
  </div>
</div>
  </body>
  </html>`
};

    