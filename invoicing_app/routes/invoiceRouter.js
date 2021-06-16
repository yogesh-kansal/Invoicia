const express=require('express');
const router=express.Router();
const invoiceController=require('../controllers/invoicecontroller')

router.get('/:id',invoiceController.get_invoice);
router.post('/',invoiceController.create_invoice);
router.patch('/:id',invoiceController.update_invoice);

module.exports=router;


