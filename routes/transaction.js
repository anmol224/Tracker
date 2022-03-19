const express=require('express');
const router=express.Router();
const {getTransaction,deleteTransaction,addTransaction} =require('../Controllers/Transaction')
router.route('/').get(getTransaction);
router.route('/').post(addTransaction);
router.route('/:id').delete(deleteTransaction);

module.exports=router;