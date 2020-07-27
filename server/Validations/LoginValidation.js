const validator = require('validator');

module.exports = function LoginValidation(data) {

    let errors = {};
    if (validator.isEmpty(data.username)) {
        errors.username = "User Name is required"
    }
    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be 6 chars"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }
    return {
        errors,
        isValid: Object.keys(errors).length ? false : true
    }
}
