const mongoose=require('mongoose');
const TransactionSchema=new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please add Text']
    },
    amount:{
        type:Number,
        required:[true,'Please add amount']
    },
    createdAt:{
            type:Date,
            default:Date.now
    }
})
module.exports=mongoose.model('transaction',TransactionSchema)