const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://goweek:goweek123@ds127655.mlab.com:27655/goweek-backend", {
    useNewUrlParser: true
});

app.get('/', (req, res) => {
    return res.send('HW!');
});

app.listen(3000, () => {
    console.log(':) Server started on port 3000');
})