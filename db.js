const mongoose=require('mongoose');
// define the mongoconnection url
const mongoUrl='mongodb://localhost:27017/hotels'
//set up mongoDb connection
mongoose.connect(mongoUrl,{

    useNewUrlParser: true,
     useUnifiedTopology: true,
})
const db=mongoose.connection;
db.on('connected',()=>
{
console.log('connected to Mongodb Server');

})
db.on('error',()=>{
    console('Mongodb Connectionn Error',err);
    module.export=db;
})