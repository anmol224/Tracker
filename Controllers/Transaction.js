const transaction=require('../models/Transaction');
//desc To get Transactions
//@route GET '/api/v1/transactions'
//access public
exports.getTransaction= async (req,res,next) =>{
   try {
    const transactions= await transaction.find();
    return(
        res.status(200).json({
            success:true,
            length:transactions.length,
            data:transactions
        })
    )   

   } catch (error) {
    return(
        res.status(500).json({
            success:false,
            error:'Server Error!!'
        })
    )
   }
}
//@desc to add transaction
//@route post '/api/v1/transactions'
//@access public
exports.addTransaction= async (req,res,next) =>{
   try {
       
    
    const Transaction=await transaction.create(req.body);
    return res.status(201).json({
        success:true,
        data:Transaction
    })
   } catch (error) {
       
     if(error.name === "ValidationError"){
         const messages=Object.values(error.errors).map(val => val.message);
         return(
             res.status(400).json({
                 success:false,
                 Error:messages
             })
         )
     }
     else{
         return(
             res.status(500).json({
                 success:false,
                 Error:"Server Error!!!"
             })
         )
     }
   }
    
}
//@desc to delete Transaction
//@route delete '/api/v1/transactions'
//@access public
exports.deleteTransaction= async (req,res,next) =>{
    try {
        const transdelete= await transaction.findById(req.params.id);
         if(!transdelete){
                return(
                    res.status(404).json({
                        success:false,
                        Error:"Not Found"
                    })
                )
         }
         await transdelete.remove()
         return (
             res.status(200).json({
                 success:true,
                data:transdelete
             })
         )
    } catch (error) {
        return(
            res.status(500).json({
                success:false,
                Error:'Internal Server Error!!'
            })
        )
    } 
    


}