const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TextSchema = new Schema({
    text_ID: {type: Number, required: true},
    title: {type: String, required: true, max: 100},
    body: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('texts', TextSchema);