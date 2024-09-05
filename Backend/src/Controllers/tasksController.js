const tasksModel = require('../Models/tasksModel')

const getAll = async (request, response) => {
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const cratedtask = await tasksModel.createTask(request.body);
    return response.status(201).json(cratedtask);
};

const deleteTask = async (request, response) => {
    const { id } = request.params;
    
    await tasksModel.deleteTask(id);
    return response.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    deleteTask
};