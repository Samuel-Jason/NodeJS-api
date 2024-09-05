const express = require('express');
const tasksController = require('./Controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksmiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.update('/tasks/:id', tasksMiddleware.validateBody, tasksController.updateTask);

module.exports = router;