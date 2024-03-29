const mongoose=require('mongoose');
const connectDB= async () =>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
          
            useUnifiedTopology:true
        });
        console.log(`MongoDB Database connected with hostname ${conn.connection.host}`.cyan.bold)
    } catch (error) {
            console.log(`Error : ${error.message}`.red)       
    }   
   

}
module.exports=connectDB;