const nodemailer = require("nodemailer");
const {template} = require('./mail_template');

const setup= async () => {
    let testAccount = await nodemailer.createTestAccount();
   // console.log(testAccount)


   let transporter=nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL || testAccount.user,
        pass: process.env.PASS || testAccount.pass
    }
    /*
    ethereal testing
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
            user:  testAccount.user,
            pass:  testAccount.pass
        },
        tls: {
            rejectUnauthorized: false}
    */
});

    return{testAccount,transporter};
};

exports.sendMail= async (invoice) => {
    let props=await setup();
    
    let data = {
        from : process.env.EMAIL || props.testAccount.user,
        to : invoice.invoicee.email,
        subject : 'Invoice',
        html: template(invoice)
    }

    //console.log(data);

    let info =await props.transporter.sendMail(data); 
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
