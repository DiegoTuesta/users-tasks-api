const { Router } = require('express');

const {  getAllCategory, getCategoryById, getCategoryPut, deleteCategory, postCategory } = require('../controllers/categories.controllers');

const router = Router();

router.post('/categories',postCategory );

router.get('/categories',getAllCategory );

router.get('/categories/:id',getCategoryById );


router.put('/categories/:id',getCategoryPut );

router.delete('/categories/:id',deleteCategory );


module.exports = router;