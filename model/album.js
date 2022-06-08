const mongoose = require('mongoose');

const schema = mongoose.Schema;

const albumSchema = new schema({
    albumId: {
        type: Number
    },
    id: {
        type: Number,
        unique: true
    },
    title: String,
    url: {
        type: String,
        required: "url can't be empty!",
    },
    thumbnailUrl: {
        type: String,
        required: "thumbnail Url can't be empty"
    }
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;