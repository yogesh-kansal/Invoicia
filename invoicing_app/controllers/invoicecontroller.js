const Invoice=require('../models/invoice');
const AppError=require('../utils/appError');
const catchAsync=require('../utils/catchAsync');
const {sendMail} =require('../utils/mail');
const {validateInvoice} =require('../utils/custom_validates');

exports.get_all=catchAsync(async (req,res,next) => {

    //req.user property is been settled while validating the token
    console.log(req.user);
    let all = await Invoice.find({biller:req.user});

    if(!all.length)
        return next(new AppError(`Don't have any invoice at this time!!!`,404));
    
    res.status(200).json(all);
})


exports.get_invoice=catchAsync(async (req,res,next) => {
    let invoice = await Invoice.findById(req.params.id);

    if(!invoice)
        return next(new AppError(`Invoice with given id ${req.params.id} does not exists!!!`,404));

    res.status(200).json(invoice);
});


exports.create_invoice=catchAsync(async (req,res,next) => {

    let errs=validateInvoice(req.body);

    if(errs!==null) {
        res.status(403).json({
            status:'invoice creation failed!!!',
            errs
        })
        return ;
    }
    
    const {due_info, ...rest}=req.body;
    req.body=rest;

    let invoice=new Invoice(req.body);
    let total=0;

    invoice.items.forEach((item,id) => {
        item.ammount = item.rate * item.quantity;
        total+=item.ammount;
    });

    invoice.biller=req.user;
    invoice.total_ammount=total;
    invoice.issue_date=new Date();
    invoice.due_date=new Date(invoice.issue_date.getTime() +3600*1000*(24*due_info.days+due_info.hours));
    
    await invoice.save();

    await sendMail(invoice)
    
    res.status(200).json({
        status:'Invoice created and send to invoicee by Email successfully',
        invoice
    })
});


exports.update_invoice=catchAsync(async (req,res,next) => {
    console.log(req.body);

    let invoice =await Invoice.findByIdAndUpdate(req.params.id,{
        $set:
            req.body
    },{runValidators: true})

    if(!invoice)
    return next(new AppError(`Invoice with given id ${req.params.id} does not exists!!!`,404));

    res.status(200).json({
        status:'Invoice updated successfully',
        invoice
    })
});


exports.del_all=catchAsync(async (req,res,next) => {

    //req.user property is been settled while validating the token
    let data =await Invoice.deleteMany({biller:req.email});

    if(data.deletedCount===0)
        return next(new AppError(`Don't have any invoices to delete!!!`,403));

    res.status(200).json({
        status:'success',
        message:'All invoices have been deleted successfully!!!'
    });
});


exports.del_invoice=catchAsync(async (req,res,next) => {

    let data=await Invoice.findByIdAndRemove(req.params.id);
    
    if(!data)
        return next(new AppError(`invoice at id ${req.params.id} does not exist!!!`,403));

    res.status(200).json({
        status:'success',
        message:`Invoices with id ${req.params.id} has been deleted successfully!!!`,
    });
})


exports.late_invoices=catchAsync(async (req,res,next) => {

    //req.user property is been settled while validating the token
    let lates=await Invoice.find({biller:req.user});
    lates=lates.filter((item) => item.due_date.getTime() < new Date().getTime())

    if(!lates.length)
        return next(new AppError(`Don't have any late invoices`,404));

    res.status(200).json({
        status:'success',
        late_invoices:lates
    })
});