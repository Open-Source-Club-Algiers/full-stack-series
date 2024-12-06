const { Router } = require('express')
const { addTaskController, getAllTaskController, updateTaskController, deleteTaskController } = require('../controllers/task')


const router = Router();

router
    .post('/', addTaskController)//----> add task route
    .get('/', getAllTaskController)//---> get all tasks route
    .put('/:id', updateTaskController) //---> update task route
    .delete('/:id', deleteTaskController);//---> delete task route




module.exports = router;
