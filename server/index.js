const express = require('express');
//const favicon = require('express-favicon');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));
//app.use(favicon(__dirname + `/favicon.ico`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
