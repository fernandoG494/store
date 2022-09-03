const express = require('express');
const router = express.Router();
const {login} = require('../usecases/user.usecase.cjs');

router.post('/', async (request, response) => {
    const { email, password } = request.body;

    try {
        const userData = await login(email, password);

        if(userData) {
            response.status(200).json({
                status: 200,
                message: 'User logged successfully',
                data: userData
            });
        } else {
            response.status(400).json({
                status: 400,
                message: "Incorrect  user's data",
            });
        }
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            error: error.message,
            message: 'Error logging user'
        });
    }
});

module.exports = router;