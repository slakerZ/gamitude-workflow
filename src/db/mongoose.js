const mongoose = require('mongoose');

mongoose.connect('mongodb://recznik:recznik1@ds259738.mlab.com:59738/heroku_pdt1jjb9', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});