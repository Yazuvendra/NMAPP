var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema({
    plotno: {type: String, required: true, max: 100},
    name: {type: String, required: true},
    mobilenumber: {type: String},
    Role: {type: String},
});


// Export the model
module.exports = mongoose.model('Owner', OwnerSchema);
