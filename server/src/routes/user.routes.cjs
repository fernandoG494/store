const express = require('express');
const userModel = require('../models/user.model.cjs');
const { getUserExists, createUser, getUsers } = require('../usecases/user.usecase.cjs');
const router = express.Router();

// CREATE USER
router.post('/', async(request, response) => {
    const userData = request.body;

    try{
        const userExist = await getUserExists(userData.email);
        
        if(!userExist){
            const newUser = await createUser(userData);
            
            response.status(201).json({
                status: 201,
                message: 'User created successfully',
                data: newUser
            });
            
        }else{
            response.status(201).json({
                status: 201,
                message: 'User already exist'
            });
        }
        
    }catch(error){
        response.status(error.status || 500);
        response.json({
            error: error.message,
            message: 'Error creating user'
        });
    };
});


//GET ALL USERS
router.get('/all', async (request, response) => {
    try {
        const users = await getUsers();

        if(users.length === 0) {
            response.status(201).json({
                status: 201,
                message: "Users don't exist"
            });

        } else {
            response.status(201).json({
                status: 201,
                data: users
            });
        }
        

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            error: error.message,
            message: 'Error getting user'
        });
    }
});
module.exports = router;