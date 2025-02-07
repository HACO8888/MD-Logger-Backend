const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', (req, res) => {
    console.log(`Key: ${req.body.key}`)
    res.send('Thanks for your cool stuff!');
})

app.get('/hello', (req, res) => {
    console.log('Extension Connected!');
    res.send('Hello World!');
});

app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`Mingdao Logger Backend Started On Port ${process.env.PORT}`);
})