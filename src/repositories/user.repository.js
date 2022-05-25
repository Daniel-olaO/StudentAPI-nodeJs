const bcrypt = require('bcrypt');
const Model = require('../database/models/users.model');

module.exports = class UserRepository {
    async getAllUsers() {
        try {
            const users = await Model.find();
            
            if(users) {
                return users.map(user => {
                    return {
                        username: user.username,
                        email: user.email,
                    }
                });
            }
        }
        catch (error) {
            return error;
        }
    }
    async createUser(user) {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if(user.password.length < 8){
            throw new Error('Password must be at least 8 characters long');
        }
        else if(!format.test(user.password)){
            throw new Error('Password must contain at least one special character');
        }
        else if(/\d/.test(user.password)){
            throw new Error('Password must contain at least one number');
        }
        else if(user.password !== user.confirmPassword) {
            throw new Error('Password and Confirm Password do not match');
        } 
        else {
            try {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
                const newUser = await Model.create(user);
                return newUser;
            }
            catch (error) {
                return error;
            }
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
    async deleteUser(id) {
        try {
            const deletedUser = await Model.findByIdAndRemove(id);
            return deletedUser;
        }
        catch (error) {
            return error;
        }
    }
};