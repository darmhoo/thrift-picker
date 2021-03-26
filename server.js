const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database');

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 8000;
// API
const users = require('./api/users');
app.use('/api/users', users);

app.use(express.static(path.join(__dirname, "client", "build")))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});