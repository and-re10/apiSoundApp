const mongoose = require('mongoose');
require('dotenv/config');

// Data base Connection
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    async () => {
        try {
            console.log("DB CONNECTED");
        } catch (error) {
            console.error(error);
        };
    }
);

// Server Connection
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3020

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());

// Routes
const userRoute = require('./routes/users');
app.use('/api/users/', userRoute);
const categorieRoute = require('./routes/categories');
app.use('/api/categorie/', categorieRoute);

// const Movie = require('./models/Movie')
// app.get('/all', async (req, res) => {
//     try {
//         const movies = await Movie.find();
//         res.send(movies);
//         console.log(movies);
//     } catch (error) {
//         console.error(error);
//     }
    
// })

app.get('/', (req, res) => {
    res.json({
        msg: 'OK',
    })
})

// Port du Server
app.listen(PORT, () => {
    try {
        console.log("CONNECTED ON PORT " + PORT);
    } catch (error) {
        console.log(error);
    };
});