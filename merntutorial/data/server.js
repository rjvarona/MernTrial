const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://rjvarona:Yessir@cluster0-rahza.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}
    );

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongo connected");
});



app.listen(port, () => {
    console.log(`server is listening on PORT ${port}`);
});