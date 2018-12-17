var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IncomeScheme = new Schema({
    plotno: {type: String, required: true, max: 100},
    month:{type: Number, required: true, max: 15},
    year:{type: Number, required: true, max: 5000},
    amount:{type: Number, required: true, max: 9999999999},
    category:{type: String, required: true, max: 100},
    categoryid:{type: String, required: true, max: 100},
    updatedOn: { type: Date, default: Date.now() }
});


// Export the model
module.exports = mongoose.model('Income', IncomeScheme);