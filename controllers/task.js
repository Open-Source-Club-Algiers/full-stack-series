

const { addTaskModel, updateTaskModel, deleteTaskModel, getAllTaskModel } = require('../models/Task')

const addTaskController = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!content || !title) {
            return res.status(400).json({ message: 'Title and content are required' });
        }
        const savedTodo = await addTaskModel(title, content)
        res.status(201).json(savedTodo);

    } catch (error) {

        res.status(500).json({ message: 'Error creating to-do item', error });
    }
}

const getAllTaskController = async (req, res) => {
    try {
        const todos = await getAllTaskModel(); // Fetch all items from the database
        res.status(200).json(todos);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching to-do items', error });
    }

}


const updateTaskController = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params
        if ((!content && !title) || !id) {
            return res.status(400).json({ message: 'Title or content are & id required ' });
        }
        const updatedTodo = await updateTaskModel(id, title, content)
        if (!updatedTodo) return res.status(404).json({ message: 'To-do not found' });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Error updating to-do item', error });
    }
}

const deleteTaskController = async (req, res) => {

    const { id } = req.params
    if (!id) {
        return res.status(400).json({ message: 'id required ' });
    }

    const deleted = await deleteTaskModel(id)
    if (!deleted) return res.status(404).json({ message: 'To-do not found' });
    res.status(200).json(deleted);


}

module.exports = { deleteTaskController, updateTaskController, getAllTaskController, addTaskController }