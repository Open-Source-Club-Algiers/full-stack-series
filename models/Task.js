const mongoose = require('mongoose');

// Define the schema (database table schema) for a task item
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is mandatory
    },
    content: {
        type: String,
        required: true, // Content is mandatory
    },
});

// define the task model so we can use it to interact with the task table 
const Task = mongoose.model('Task', taskSchema);


const addTaskModel = async (title, content) => {
    const task = new Task({
        title: title,
        content: content,
    });
    const savedtask = await task.save();
    return savedtask;
};

// Function to get all tasks
const getAllTaskModel = async () => {
    try {
        const tasks = await Task.find();  // Fetch all tasks
        return tasks;
    } catch (error) {
        throw new Error('Error fetching tasks: ' + error.message);
    }
};

// Function to update a task by its ID
const updateTaskModel = async (id, updatedData) => {
    try {
        const updatedtask = await Task.findByIdAndUpdate(id, updatedData, { new: true });
        return updatedtask;
    } catch (error) {
        throw new Error('Error updating task: ' + error.message);
    }
};

// Function to delete a task by its ID
const deleteTaskModel = async (id) => {
    try {
        const deletedtask = await Task.findByIdAndDelete(id);
        return deletedtask;
    } catch (error) {
        throw new Error('Error deleting task: ' + error.message);
    }
};
module.exports = { deleteTaskModel, updateTaskModel, getAllTaskModel, addTaskModel };