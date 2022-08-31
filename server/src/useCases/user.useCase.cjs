const UserModel = require('../models/user.model.cjs');
const createError = require('http-errors');

async function createUser(userData){
    const {displayName, email, password} = userData;

    if(!displayName || !email || !password){
        throw new createError('400', 'Missing required fields');
    };

    console.log('use case >', displayName, email, password);
    /* 
        TODO - finish the creation using bcrypt and create mongo function.
        Guide -> https://github.com/fernandoG494/pet-project/blob/main/server/src/usecases/user.usecase.cjs
    */ 
};

async function getUserExists(email){
    const userFound = await UserModel.findOne({email});
    
    if(!userFound){
        return false;
    }
    return true;
};

module.exports = {
    createUser,
    getUserExists
};