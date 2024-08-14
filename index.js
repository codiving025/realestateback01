const express = require('express')
const app = express()
const mongoose=require('mongoose')
const houseRouter = require('./routes/houseRoutes');
const enquiryRouter = require('./routes/enquiryRoutes');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const port = 8000
app.use(express.json());
app.use(cors());
const db = module.exports = async()=>{
    try{
        //  await mongoose.connect("mongodb://0.0.0.0:27017/")
        // await mongoose.connect("mongodb://192.168.100.159:27017/")
        await mongoose.connect(process.env.MONGOURL,{
            user : process.env.DBUSER,
            pass : process.env.DBPASS
        })
        console.log("MongoDB Connection is successful")
    }catch(e){
        console.log(e);
        console.log("MongoDB Connection is not successful")
    }
}
db();
app.use('/houses',houseRouter)
app.use('/enquiry',enquiryRouter)
app.use('/user',userRoutes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})