const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://rjvarona:rjvarona@cluster0-rahza.gcp.mongodb.net/test?retryWrites=true&w=majority', { useCreateIndex: true}
    ).catch(function (reason) {
        console.log(reason);
    });

const connection = mongoose.connection;

connection.once('openn', () => {
    console.log("Mongo connected");
});



app.listen(port, () => {
    console.log(`server is listening on PORT ${port}`);
});