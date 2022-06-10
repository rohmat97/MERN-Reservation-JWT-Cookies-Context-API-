import monggose from 'mongoose'

const { Schema } =monggose

const HotelSchema = new monggose.Schema({
    name: {
        type: String,
        required:true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance:  {
        type: String,
        required: true
    },
    photos:  {
        type: [String],
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    feature: {
        type: Boolean,
        required:false
    }
})

export default monggose.model('Hotel', HotelSchema)