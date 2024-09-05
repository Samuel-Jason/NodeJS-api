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
    const removeTask = await connection.execute('DELETE FROM task WHERE id = ?', id);
    return removeTask;
};

const updateTask = async (id, task) => {
    const query = 'UPDATE task SET title = ?, status = ? WHERE id = ?'
    const {title, status} = task;

    const [updateTask] = await connection.execute(query, [title, status, id]);
    return updateTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};