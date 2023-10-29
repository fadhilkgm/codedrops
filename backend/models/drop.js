const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dropSchema = new Schema({
    dropname: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    dropbody: {
        type: String,
        required: true
    },
    tags: {
        type: [],
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Drop', dropSchema);