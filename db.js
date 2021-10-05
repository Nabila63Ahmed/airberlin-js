const { Timestamp } = require('bson')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/airberlin')

const aircraftSchema = new mongoose.Schema({
    tailNumber: String,
    model: String,
    seating: Array
})

const Aircraft =  mongoose.model('Aircraft', aircraftSchema)

const airportSchema = new mongoose.Schema({
    iata: String,
    name: String
})

const Airport =  mongoose.model('Airport', airportSchema)


const flightSchema = new mongoose.Schema({
    _id: String,
    aircraftTailNumber: String,
    departureAirportIata: String,
    arrivalAirportIata: String,
    departsAt: Timestamp
})

const Flight =  mongoose.model('Flight', flightSchema)
