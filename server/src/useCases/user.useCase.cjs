const UserModel = require('../models/user.model.cjs');
const createError = require('http-errors');
const bcrypt = require('bcrypt');

async function createUser(userData){
    const {displayName, email, password} = userData;

    if(!displayName || !email || !password){
        throw new createError('400', 'Missing required fields');
    };

    const hashPass = await bcrypt.hash(password, 15);
    const date = new Date();

    userData.password = hashPass;
    userData.createdAt = date;
    userData.updatedAt = date;
    userData.role = 'user';

    const newUser = new UserModel({
        email,
        hashPass,
        displayName,
        date,
        date
    });

    return UserModel.create(userData);
};

async function getUserExists(email){
    const userFound = await UserModel.findOne({email});
    
    if(!userFound){
        return false;
    }
    return true;
};

async function getUsers() {
    const users = UserModel.find();
    return users;
}

module.exports = {
    createUser,
    getUserExists,
    getUsers
};