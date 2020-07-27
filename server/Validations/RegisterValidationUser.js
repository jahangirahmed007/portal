const validator = require('validator');

module.exports = function ValidateRegisterInput(data) {
    let errors = {};

    if (validator.isEmpty(data.firstName)) {
        errors.firstName = "First Name field is required"
    }
    if (validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name field is  required"
    }
    if (validator.isEmpty(data.cnic)) {
        errors.cnic = "CNIC Number field is  required"
    }
    if (validator.isEmpty(data.mobileNo)) {
        errors.mobileNo = "Mobile Number field is  required"
    }
    if (validator.isEmpty(data.address)) {
        errors.address = "Address field is  required"
    }
    if (validator.isEmpty(data.province)) {
        errors.province = "Province field is  required"
    }
    if (validator.isEmpty(data.district)) {
        errors.district = "District field is  required"
    }
    if (validator.isEmpty(data.tehsil)) {
        errors.tehsil = "Tehsil field is  required"
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is  required"
    }
    if (validator.isEmpty(data.username)) {
        errors.username = "User Name field is  required"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is  required"
    }
    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must have 6 chars"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }
    if (!validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
        errors.password_confirm = "Password must have 6 chars"
    }
    if (!validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = "Password  password must match"
    }
    if (validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = "Password id required"
    }
    return {
        errors,
        isValid: Object.keys(errors).length ? false : true
    }

}