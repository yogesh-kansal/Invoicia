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
