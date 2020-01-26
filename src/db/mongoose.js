const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || require('../../config'), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});