const express = require('express');
const { getUserExists, createUser } = require('../usecases/user.usecase.cjs');
const router = express.Router();

// CREATE USER
router.post('/', async(request, response) => {
    const userData = request.body;

    try{
        const userExist = await getUserExists(userData.email);
        
        if(!userExist){
            const newUser = await createUser(userData);
            
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

module.exports = router;