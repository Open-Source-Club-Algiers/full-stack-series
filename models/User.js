const mongoose = require('mongoose');

// Define the schema for a to-do item
const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true, // email is mandatory
    },
    password: {
        type: String,
        required: true, // password is mandatory

    },

});




const User = mongoose.model('User', userSchema);


export const addUserModel = async (title, content) => {
    // code here 
    // write you mongodb query to add new user 

}




export const getUserByEmailModel = async (email) => {
    // code here
    // write you mongodb query to filter the user by email 


}

module.exports = { addUserModel, getUserByEmailModel };