const Mongoose = require("mongoose");

const Files = new Mongoose.Schema({
    title: { 
        type: string,
        required : true
    },
    path : {
        type : String,
        required : true
    },
}, {
    timestamps: true
});

module.exports = Mongoose.model('Files', Files);