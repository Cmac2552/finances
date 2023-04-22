const express = require('express');
const multer = require('multer');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const mongoURI = require('./config.json');

const app = express();
const upload = multer({dest: 'uploads/'});


const url = mongoURI.connectionString;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("MongoDB connected")
})
app.use(cors());
const db = require('./model');

app.post('/api/upload', upload.single('file'), (req, res) =>{
    const file = req.file;
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (row) =>
        {
            console.log(row);
        })
        .on('end', () =>
        {
            console.log("Done");
        });
    res.send('Upload successful');
    let item = new db();
    item.money = 12;
    item.save()
});

app.listen(3000, () =>{
    console.log('Server started on port 3000')
})