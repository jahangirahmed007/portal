const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newSchema = new Schema({
    tourType: { type: String },
    via_Direct: { type: String },
    flight: { type: String },
    oneway_return: { type: String },
    booked_ticketed: { type: String },
    adult: { type: String },
    child: { type: String },
    infants: { type: String },
    refundable_nonRefundable: { type: String },
    priceAdults: { type: String },
    priceChilds: { type: String },
    priceInfants: { type: String },
    totalPrice: { type: String },
    installments: { type: String },
    firstInstall: { type: String },
    secondInstall: { type: String },
    expiryTime: { type: String },
    CRS: { type: String },
    airline: { type: String },
    onwayfrom: { type: String },
    onwayto: { type: String },
    returnOnwards: { type: String },
    returnDate: { type: String },
    agentId: { type: String }

});
module.exports = new mongoose.model("group", newSchema);