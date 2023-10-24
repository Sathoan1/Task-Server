const express = require('express');
const router = express.Router();

// require expoerts
const{
    getAllTasks,
    getSingleTask,
    updateTask,
    createTask,
    deleteTask,
    
}= require('../controller/taskController');



router.route('/').get(getAllTasks).post(createTask)
router.route('/:taskId').get(getSingleTask).patch(updateTask).delete(deleteTask)

// set up our routes

module.exports= router