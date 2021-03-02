const express = require('express');
const Router = express();
const User = require('../models/User');
const upload = require('../middlewares/multer');

// Route pour afficher les Utilisateur existants
Router.get("/showAll", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error)
    };
});

// // Route pour afficher un Utilisateur spécifique
Router.get('/showOne/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        
        res.send(user);
        console.log(user);
        
    } catch (error) {
        console.log(error);
    };
});

// Route pour ajouter un nouveau Utilisateur
Router.post('/store', async (req, res) => {
    const user = new User({
        name: req.body.userName,
        phone: req.body.userPhone,
    });
    
    try {
        const saveUser = await user.save();
        console.log(saveUser);
        res.send(saveUser);
    } catch (error) {
        console.error(error);
    };
});



// // Route pour ajouter des images

// // const multer = require("multer");

// // // Definir le stockage des images
// // const storage = multer.diskStorage({
// //     // Destination du fichier
// //     destination: function(req, fill, dc){
// //         cb(null, "./uploads/images");
// //     },

// //     // Ajouter la date de création au nom du fichier
// //     filename: function(req, file, cb){
// //         cb(null, Date.now()+file.originalname);
// //     }
// // });

// // // Upload les parametres de multer
// // const upload = multer({
// //     storage: storage,
// //     limits: {
// //         fieldSize: 1024 * 1024 * 5
// //     }
// // });


Router.put("/addContact/:id", async (req, res) => {

    User.findOne({
        _id: req.params.id
    }, function (err, user){
        if (err) return res.send(err);

        user.contacts.push({
            name: req.body.contactName,
            color: req.body.contactColor
        })

        user.save(function(err){
            if (err) return console.error(error);
            console.log(user);
            return res.send(user);
        })
    });
});

// Route pour ajouter des musiques
Router.put("/addSound/:id", async (req, res) => {
    User.findOne({
        _id: req.params.id
    }, function (err, user){
        if (err) return res.send(err);

        user.sounds.push({
            name: req.body.soundName,
            categorie: req.body.soundCategorie
        })

        user.save(function(err){
            if (err) return console.error(error);
            console.log(user);
            return res.send(user);
        })
    });
});

// // Route pour actualizer un Utilisateur existant
// Router.put('/update/:userId', async (req, res) => {
//     try {
//         const user = await User.updateOne({
//             _id: req.params.userId
//         },{
//             name: req.body.userName,
//             age: req.body.userAge,
//             photo: req.body.userPhoto,
//             role: req.body.userRole,
//             galerie: [
//                 {
//                     url: req.body.userGalerie
//                 }
//             ]
//         }); // (filter, data updated)
//         res.send(user);
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     };
// });

// // Route pour supprimer un Utilisateur existant
Router.delete("/delete/:userId", async (req, res) => {
    try {
        const user = await User.deleteOne({
            _id: req.params.userId
        });
        res.send(user);
        console.log(user);
    } catch (error) {
        console.log(error);
    };
});

module.exports = Router;