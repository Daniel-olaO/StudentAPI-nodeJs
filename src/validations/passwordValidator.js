const PasswordValidator = require('password-validator');
const schema = new PasswordValidator();

schema
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols()
    .is().not().oneOf(['Passw0rd', 'Password123']);

module.exports = schema;
