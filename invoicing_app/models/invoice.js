const mongoose = require("mongoose");
const schema = mongoose.Schema;

const invoiceSchema = new schema({
    issue_date: {
        type:Date
    },
    items: [{
        name:{type:String},
        rate:{type:Number},
        quantity:{type:Number},
        ammount:{type:Number}
    }],
    total_ammount:{
        type:Number,
        default: 0
    },
    status:{
        type:String,
        enum:['outstanding','paid', 'late'],
        de
    },
    payments: {
        method: {
            type:String
        },
        checks: {
            type:String
        }
    },
    invoicee: {
        name:{
            type:String,
            required:[true,'invoicee name is required']
        },
        email: {
            type:String,
            required:[true,'invoicee email id is required to send email']
        }
    }
});

const Invoice=mongoose.model('invoice',invoiceSchema);

module.exports=Invoice;

/**
   name: {
        type:String,
        required: [true,'invoice name is requied'],
    },
 */