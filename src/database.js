const mongoose = require('mongoose');
const URI = 'mongodb+srv://<user>:<passwodr>@cluster0.xyuut.gcp.mongodb.net/Canje?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
