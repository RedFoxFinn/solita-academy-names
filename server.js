const config = require('./utils/config.js');
let express = require('express'),
  app = express(),
  PORT = config.port;
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.route('/')
    .get((req, res) => {
      app.use(express.static('build'));
      res.sendFile(path.join(__dirname, '/build/index.html'));
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, listening....now?`);
});      