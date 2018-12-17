var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IncomeCategorySchema = new Schema({  
    category:{type: String, required: true, max: 100},
    updatedOn: { type: Date, default: Date.now() }
});


// Export the model
module.exports = mongoose.model('IncomeCategory', IncomeCategorySchema);   