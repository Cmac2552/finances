const express = require('express');
const multer = require('multer');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const upload = multer({dest: 'uploads/'});

app.use(cors());


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
});

app.listen(3000, () =>{
    console.log('Server started on port 3000')
})