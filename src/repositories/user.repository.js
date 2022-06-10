const bcrypt = require('bcrypt');
const Model = require('../database/models/users.model');
const schema = require('../validations/passwordValidator')

module.exports = class UserRepository {
    async createUser(user) {
        try {
            if(user.password === user.rePassword){
                if(schema.validate(user.password)){
                    const hashedPassword = await bcrypt.hash(user.password, 10);
                    user.password = hashedPassword;
                    const newUser = await Model.create(user);
                    return {
                        user: newUser.username,
                        email: newUser.email
                    };
                }
                else{
                    const validation = schema.validate(user.password, {
                        details: true
                    });
                    return validation;
                }
            }
            else{
                return "password doesn't match";
            }
            
        }
        catch (error) {
            if(error.code == 11000){
                return "User Name already taken!";
            }
            console.log(error);
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
                    console.log('invalid password');
                }
            }
            else {
                console.log('user: ' + user.username + ' not found');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteUser(id) {
        try {
            const deletedUser = await Model.findByIdAndRemove(id);
            return deletedUser;
        }
        catch (error) {
            console.log(error);
        }
    }
};