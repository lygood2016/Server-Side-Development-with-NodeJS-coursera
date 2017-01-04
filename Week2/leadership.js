// grab the things we need
var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

// create a schema
var leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
      type: String,
      required: true
    },
    abbr: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Leaderships = mongoose.model('Leadership', leadershipSchema);

module.exports = Leaderships;