const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer')
const cors = require('cors');

//handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')))

app.use(cors())

// respond with main app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../src/index.html')));

// MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, file.originalname)
}
})

const upload = multer({ storage: storage }).single('file')

let curFileName;
//respond to POST /uploads requests
app.post('/upload', (req, res) => { 
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
      curFileName = req.file.filename
      console.log(curFileName)
    return res.status(200).send(req.file)
  })
});

app.get('/download', (req, res) => {
  console.log(curFileName)
  //if curFilename exists...
  res.status(200).json(curFileName)
})

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});

