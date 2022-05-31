const bcrypt = require('bcrypt');
const Model = require('../database/models/users.model');

module.exports = class UserRepository {
    async createUser(user) {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
            const newUser = await Model.create(user);
            return {
                user: newUser.username,
                email: newUser.email
            };
        }
        catch (error) {
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