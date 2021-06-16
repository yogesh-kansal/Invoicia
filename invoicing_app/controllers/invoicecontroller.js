const AppError=require('../utils/appError');
const catchAsync=require('../utils/catchAsync');
const Invoice=require('../models/invoice');

exports.get_invoice=catchAsync(async (req,res,next) => {
    console.log(req.params);
    let invoice = await Invoice.findOne({_id:req.params.id});

    if(!invoice) {
        return next(new AppError('Invoice with given id not exists',404));
    }

    res.status(200).json({
        status:'success',
        invoice
    });
});

exports.create_invoice=catchAsync(async (req,res,next) => {
    console.log(req.body);
    let invoice=new Invoice();
/*    let total=0;

    invoice.items.forEach((item,id) => {
        item.ammount = item.rate * item.quantity;
        total+=item.ammount;
    });

    invoice.total_ammount=total;

    await invoice.save();
 */
    console.log(invoice);
    res.status(201).json({
        status:'success'
    })
});

exports.update_invoice=catchAsync(async (req,res,next) => {
    console.log(req.body);

    await Invoice.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })

    res.status(200).send('Invoice modified successfully!!!');
});