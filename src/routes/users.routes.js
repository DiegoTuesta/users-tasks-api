const { Router } = require('express');

const {  getAllUsers, getUserById, updateUser, deleteUser, createUser } = require('../controllers/users.controllers');

const router = Router();

router.post('/users',createUser );

router.get('/users',getAllUsers );

// obtiene los datos del ususario con las tareas y sus categorias
router.get('/users/:id',getUserById );


router.put('/users/:id',updateUser );

router.delete('/users/:id',deleteUser );


module.exports = router;