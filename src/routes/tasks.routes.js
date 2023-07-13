const { Router } = require('express');

const { getAllTasks, getTasksById, getTasksPut, deleteTasks, postTasks } = require('../controllers/tasks.controllers');

const router = Router();

router.post('/tasks',postTasks );

router.get('/tasks',getAllTasks );

router.get('/tasks/:id',getTasksById );


router.put('/tasks/:id',getTasksPut );

router.delete('/tasks/:id',deleteTasks );


module.exports = router;