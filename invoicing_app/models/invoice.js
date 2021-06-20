const mongoose = require("mongoose");
const schema = mongoose.Schema;

const invoiceSchema = new schema({
    biller: {
        type: String,
        required:[true, 'biller email is reuired!!!']
    },

    items: [{
        name:{
            type:String,
            required:[true, 'productname is not specfied'],
        },
        rate:{
            type:Number,
            required:[true, 'product rate is not specfied'],
            min: [0, 'quantity must have non-negative value']
        },
        quantity:{
            type:Number,
            required:[true, 'product quantity is not specfied'],
            min: [1, 'quantity must have value atleast 1 ']
        },
        ammount:{
            type:Number,
            min: 0
        }
    }],

    total_ammount:{
        type:Number,
        default: 0
    },

    status:{
        type:String,
        enum:['outstanding','paid', 'late'],
        default:'outstanding'
    },

    payment_methods: [{type:String}],

    invoicee: {
        name:{
            type:String,
            required:[true,'invoicee name is required']
        },
        email: {
            type:String,
            required:[true,'invoicee email id is required to send email']
        }
    },

    issue_date: {
        type:Date
    },

    due_date: {
        type: Date,
        default:new Date()
    }
},
{
    timestamps:true
});

const Invoice=mongoose.model('invoice',invoiceSchema);

module.exports=Invoice;
