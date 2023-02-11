const mongoose = require('mongoose')

const VideoMetaDataSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please provide video title'],
    },
    category:{
        type:String,
        enum:['ScienceAndTech','Historical','Astronomy','Others'],
        required:[true, 'Please provide video category'],
    },
    description:{
        type:String,
        required:[true, 'Please provide description']
    },
    trending:{
        type:String,
        default:'false',
    },
    uniqueFileName:{
        type:String,
    },
    photo:{
        type:String,
    },
})

module.exports = mongoose.model('VideoMetaData',VideoMetaDataSchema)