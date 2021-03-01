const multer = require("multer");

// Definir le stockage des images
const storage = multer.diskStorage({
    // Destination du fichier
    destination: function(req, file, cb){
        cb(null, "../../frontend/public/uploads/images");
    },

    // Ajouter la date de création au nom du fichier
    filename: function(req, file, cb){
        cb(null, Date.now()+file.originalname);
    }
});

// Upload les parametres de multer
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 5
    }
});

module.exports = upload;