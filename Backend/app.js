const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/stores', require('./routes/store.router'));
app.use('/timeframeinfo', require('./routes/timeframeInfo.router'));
app.use('/transactions', require('./routes/transactions.router'));

app.listen(3000, () =>{
    console.log('Server started on port 3000')
})