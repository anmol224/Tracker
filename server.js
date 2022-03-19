const express=require('express');
const path=require('path');
const app=express();
const denv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan')
const transaction=require('./routes/transaction');
const connectDB=require('./config/db');
denv.config({path:'./config/config.env'});
const PORT=process.env.PORT;
connectDB();
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}

app.use(express.json())
app.use('/api/v1/transactions',transaction);
if(process.env.NODE_ENV =="production"){
    app.use(express.static('Client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve( __dirname,'Client','build','index.html'))
    })
}
app.listen(PORT,() => console.log(`Server Listening on Port ${PORT} with the node environment ${process.env.NODE_ENV}`.yellow.bold))

