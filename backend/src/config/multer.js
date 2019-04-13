const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
module.exports = {
    dest : path.resolve(__dirname, "..", "..", "tmp"),

    storage : multer.diskStorage({
        destination :  (req, file , callback) => {
            callback(null,path.resolve(__dirname, "..", "..", "tmp"));
        },
        
        filename : (req, file, callback) => {
            crypto.randomBytes(16,(error,hash) => {
                if (error) callback(error);

                file.key = `${hash.ToString("hex")} - ${file.originalname}`;
                callback(null,file.key);
            })
        }
    })
}