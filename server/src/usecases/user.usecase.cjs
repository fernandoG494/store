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

    userData.createdAt = date;
    userData.updatedAt = date;

    const newUser = new UserModel({
        'email': email,
        'password': hashPass,
        'displayName': displayName,
        'createdAt': userData.createdAt,
        'updatedAt': userData.updatedAt,
        'role': 'user',
    });

    return UserModel.create(newUser);
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
};

// const getUsers = async() => {
//     const users = UserModel.find();
//     return users;
// };

async function getUserById(id) {
    return UserModel.findById(id);
};

async function getUserByEmail(email) {
    return UserModel.findOne({email});
}


async function login(email, password) {
    const user = await getUserByEmail(email);

    if(!user) return;

    const isValidPassword =  await bcrypt.compare(password, user.password);

    console.log(isValidPassword);
    
    if(!isValidPassword) return;

    return user;
};

module.exports = {
    createUser,
    getUserExists,
    getUsers,
    getUserById,
    login
};
