const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
    console.log('Extension Connected!');
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log(`Key: ${req.body.key}`)
    res.send('Thanks for your cool stuff!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})