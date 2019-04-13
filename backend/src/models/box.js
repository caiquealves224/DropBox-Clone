const Mongoose = require("mongoose");

const Box = new Mongoose.Schema({
    title: { 
        type: String,
        required : true
    },
    files : [{ type: Mongoose.Schema.Types.ObjectId, ref : "file"}],
}, {
    timestamps: true
});

module.exports = Mongoose.model('Box', Box);