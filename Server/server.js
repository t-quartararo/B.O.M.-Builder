const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const multer = require('multer')
const cors = require('cors');

app.use(express.static('src'));

//handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// respond with main app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../src/index.html')));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'img')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

const upload = multer({ storage: storage }).single('file')


// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});

