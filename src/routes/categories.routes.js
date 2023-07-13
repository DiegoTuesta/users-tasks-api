const { Router } = require('express');

const {  getAllCategories, getCategoryById, updateCategory, deleteCategory, createCategory } = require('../controllers/categories.controllers');

const router = Router();

router.post('/categories',createCategory );

router.get('/categories', getAllCategories );

router.get('/categories/:id',getCategoryById );


router.put('/categories/:id',updateCategory );

router.delete('/categories/:id',deleteCategory );


module.exports = router;