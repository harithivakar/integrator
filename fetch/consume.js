const fetch = require('node-fetch')
const Album = require('../model/album.js');
require('dotenv').config();


exports.fetchData = async () => {

    const result = await fetch("https://jsonplaceholder.typicode.com/photos/");

    // console.log(result);

    const responseData = await result.json();
    console.log(typeof responseData);

    console.time('DBWrite');

    // await Album.collection.insertMany(responseData, (err, docs) => {
    //     if(err) {
    //         console.log(`Error occured while inserting: ${err}`);
    //     }else {
    //         console.log(`Documents inserted from api`);
    //     }
    // });

    // await Album.insertMany(responseData)
    // .then((result) => {
    //     // console.log('Result: ', result);
    // })
    // .catch(err => {
    //     console.log('Error: ', err);
    // });

    console.timeEnd('DBWrite');


    return responseData;
}

