var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
    month:{type: Number, required: true, max: 15},
    year:{type: Number, required: true, max: 5000},
    paid:{type: Number, required: true, max: 9999999999},
    billed:{type: Number, required: true, max: 9999999999},
    balance:{type: Number, required: true, max: 9999999999},
    category:{type: String, required: true, max: 100},
    categoryid:{type: String, required: true, max: 100},
    Notes:{type:String},
    status:{type: String, required: true, max: 100},
    updatedOn: { type: Date, default: Date.now() }
});


// Export the model
module.exports = mongoose.model('Expense', ExpenseSchema);   