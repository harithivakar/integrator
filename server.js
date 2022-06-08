const mongoose = require('mongoose');
require('dotenv').config();


const app = require('./app.js');


const init = (app) => {

    mongoose.connect(`${process.env.DB_URI}/${process.env.DB}`).then(()=>console.log('connected'))
    .catch(e=>console.log(e));;
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on ${process.env.PORT || 3000}`);
    });



}

init(app);