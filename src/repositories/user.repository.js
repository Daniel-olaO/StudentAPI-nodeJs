const bcrypt = require('bcrypt');
const Model = require('../database/models/users.model');
const schema = require('../validations/passwordValidator');


module.exports = class UserRepository {
    async createUser(user) {
        try {
            if(user.password === user.rePassword){
                if(schema.validate(user.password)){
                    const hashedPassword = await bcrypt.hash(user.password, 10);
                    user.password = hashedPassword;
                    const newUser = await Model.create(user);
                    return {
                        username: newUser.username,
                        email: newUser.email
                    };
                }
                else{
                    const validation = schema.validate(user.password, {
                        details: true
                    });
                    throw new Error(validation[0].message);
                }
            }
            else{
                throw new Error("password doesn't match");
            }
            
        }
        catch (error) {
            if(error.code == 11000){
                throw new Error("User Name already taken!");
            }
            throw new Error(error);
        }
    }
    async loginUser(user) {
        try {
            const foundUser = await Model.findOne({username: user.username});
            if(foundUser) {
                const isPasswordValid = await bcrypt.compare(user.password, foundUser.password);
                if(isPasswordValid) {
                    return foundUser.username;
                }
                else {
                    throw new Error('invalid password');
                }
            }
            else {
                throw new Error('user: ' + user.username + ' not found');
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteUser(username) {
        try {
            const deletedUser = await Model.findOneAndDelete({username: username});
            return deletedUser;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};