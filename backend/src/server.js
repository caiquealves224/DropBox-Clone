const mongoose = require("mongoose");
const express = require("express");
const rotas = require("./routes");

mongoose.connect("mongodb+srv://dropboxclone:dropboxclone@cluster0-zpokx.mongodb.net/dropbox?retryWrites=true", {
    useNewUrlParser: true
})
.catch(e => {
    console.error(e)
    process.exit(1);
});

const app = express();

app.use 

app.use(rotas);

app.listen(3000)