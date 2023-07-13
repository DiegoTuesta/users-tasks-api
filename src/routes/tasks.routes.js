const { Router } = require('express');

const { getAllTasks, getTaskById, updateTask, deleteTask, createTask } = require('../controllers/tasks.controllers');

const router = Router();

router.post('/tasks',createTask );

router.get('/tasks',getAllTasks );

router.get('/tasks/:id',getTaskById );


router.put('/tasks/:id',updateTask );

router.delete('/tasks/:id',deleteTask );


module.exports = router;