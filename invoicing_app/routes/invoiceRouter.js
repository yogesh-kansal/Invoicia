const express=require('express');
const router=express.Router();
const invoiceController=require('../controllers/invoicecontroller');
const {verifytoken}=require('../utils/verifyToken');

//for invoices
router.get('/', verifytoken, invoiceController.get_all);
router.post('/', verifytoken, invoiceController.create_invoice);
router.delete('/', verifytoken, invoiceController.del_all);


router.get('/late', verifytoken, invoiceController.late_invoices);


//for specific invoice
router.get('/:id', verifytoken, invoiceController.get_invoice);
router.patch('/:id', verifytoken, invoiceController.update_invoice);
router.delete('/:id', verifytoken, invoiceController.del_invoice);

module.exports=router;


