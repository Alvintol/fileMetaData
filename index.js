const express = require('express');
const cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'tempfiles/' })


const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  console.log('REQUEST*****:', req.file)
  res.send({
    "name": "test.pdf",
    "type": "test/pdf",
    "size": 99999
  })
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
