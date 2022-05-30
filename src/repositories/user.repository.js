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
                    return validation[0].message;
                }
                
            }
            else{
                return "password doesn't match";
            }
        }
        catch (error) {
            if(error.code == 11000){
                return "User Name already taken!"
            }
            return error;
        }
    }
    async loginUser(user) {
        try {
            const foundUser = await Model.findOne({username: user.username});
            if(foundUser) {
                const isPasswordValid = await bcrypt.compare(user.password, foundUser.password);
                if(isPasswordValid) {
                    return foundUser;
                }
                else {
                    return 'invalid password';
                }
            }
            else {
                return 'user: ' + user.username + ' not found';
            }
        }
        catch (error) {
            return error;
        }
    }
    async deleteUser(username) {
        try {
            const deletedUser = await Model.findOneAndDelete({username: username});
            return deletedUser;
        }
        catch (error) {
            return error;
        }
    }
};