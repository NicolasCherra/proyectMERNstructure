const mongoose = require('mongoose');
const URI = 'mongodb+srv://nicolas17197:pvl8Elpwmf2Lu5TA@cluster0.xyuut.gcp.mongodb.net/Canje?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;