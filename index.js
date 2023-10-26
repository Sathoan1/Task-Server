require ('dotenv').config();
const express = require('express');
const app= express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const cors = require('cors')
const taskRouter = require('./routes/taskRoutes')


app.use(express.json())
app.use(cors())

//routes
app.use('/api/tasks', taskRouter)

const startServer = async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: 'tasks'
    })
    app.listen(PORT, ()=>{
        console.log(`server listening on port: ${PORT}...`);
    })
    }catch(error){
        console.log(error);
    }
};
startServer();

app.use((req, res) =>{
    res.status(404).json({success: false, msg: 'resource not found'})
})