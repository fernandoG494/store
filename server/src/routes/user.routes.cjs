//* Route: /user/

const express = require('express');
const router = express.Router();
const {
    getUserExists,
    createUser,
    getUsers,
    getUserById
} = require('../usecases/user.usecase.cjs');

//* POST create user
router.post('/', async(request, response) => {
    console.log('POST /user/');
    const userData = request.body;
    
    try{
        const userExist = await getUserExists(userData.email);
        
        if(!userExist){
            const newUser = await createUser(userData);
            response.status(200).json({
                status: 200,
                message: 'User created successfully',
                data: newUser
            });
        }else{
            response.status(201).json({
                status: 201,
                message: 'User already exist'
            });
        };
    }catch(error){
        response.status(error.status || 500);
        response.json({
            error: error.message,
            message: 'Error creating user'
        });
    };
});

//* GET retrive all users
router.get('/', async (request, response) => {
    console.log('GET /user/');

    try {
        const users = await getUsers();
        if(users.length > 0) {
            response.status(200).json({
                status: 200,
                data: users
            });
        };
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            error: error.message,
            message: 'Error getting users'
        });
    };
});


//* GET get user by id
router.get('/:id', async (request, response) => {
    console.log(`GET /users/${id}`);
    const { id } = request.params;
    
    try {
        const user = await getUserById(id);
        if(user){
            console.log(user);
            response.status(200).json({
                status: 200,
                data: user
            });
        };
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            error: error.message,
            message: 'Error getting user'
        });
    };
});

module.exports = router;
