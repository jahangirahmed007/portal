const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    companyName: { type: String },
    licenseNo: { type: String },
    cnic: { type: String },
    iataVerify: { type: String },
    iataNo: { type: String },
    companyEmail: { type: String },
    telNo: { type: String },
    mobileNo: { type: String },
    whatsApp: { type: String },
    address: { type: String },
    province: { type: String },
    district: { type: String },
    tehsil: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    cancreateAgent: { type: Boolean, default: false },
    canmodifyAgent: { type: Boolean, default: false },
    canactivateAgent: { type: Boolean, default: false },
    candeactivateAgent: { type: Boolean, default: false },
    candeleteAgent: { type: Boolean, default: false },
    canviewAgentsDealHistory: { type: Boolean, default: false },
    canapproveGroup: { type: Boolean, default: false },
    canrejectGroup: { type: Boolean, default: false },
    canapproveDemand: { type: Boolean, default: false },
    canrejectDemand: { type: Boolean, default: false },
    canviewSubscriptions: { type: Boolean, default: false },
    canfindGroup: { type: Boolean, default: false },
    cancreatePayment: { type: Boolean, default: false },
    type: { type: String }
})
module.exports = new mongoose.model('admin', newSchema);

