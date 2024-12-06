

const { getUserByEmailModel, addUserModel } = require('../models/User')// function that you need to interact with database 

const registerController = async (req, res) => {
    try {
        // code here 

    } catch (error) {

        res.status(500).json({ message: 'Error registering new user', error });
    }
}

const loginController = async (req, res) => {
    try {
        //code here 



    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal login error', error });
    }

}



module.exports = { loginController, registerController }