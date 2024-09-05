const connection = require('./connection')

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    const { title, } = task;
    const dateUTC = new Date(Date.now()).toISOString();

    const query = 'INSERT INTO task (title, status, created_at) VALUES(?, ?, ?)';
    
    const createTask = await connection.execute(query, [title, 'pendente', dateUTC]);

    return {insertId: createTask.insertId}
};

const deleteTask = async (id) => {
    const removesTask = await connection.execute('DELETE FROM task WHERE id = ?', id);
    return removesTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask
};