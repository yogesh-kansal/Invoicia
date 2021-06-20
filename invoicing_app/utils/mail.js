const nodemailer = require("nodemailer");
const {template} = require('./mail_template');

const setup= async () => {
    let testAccount = await nodemailer.createTestAccount();
   // console.log(testAccount)

    let transporter=nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
            user: process.env.email || testAccount.user,
            pass: process.env.email_pass || testAccount.pass
        },
        tls: {
            rejectUnauthorized: false}
    });


    return{testAccount,transporter};
};

exports.sendMail= async (invoice) => {
    let props=await setup();
    
    let data = {
        from : process.env.email || props.testAccount.user,
        to : invoice.invoicee.email,
        subject : 'Invoice',
        html: template(invoice)
    }

    //console.log(data);

    let info =await props.transporter.sendMail(data); 
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
