const mongoose = require('mongoose');
const connection = "mongodb+srv://darmhoo:damola@thrift.zooru.mongodb.net/thrift_test?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));