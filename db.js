const { Timestamp } = require('bson')

mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/airberlin')

aircraftSchema = new mongoose.Schema({
    tailNumber: String,
    model: String,
    seating: Array
})

airportSchema = new mongoose.Schema({
    iata: String,
    name: String
})

flightSchema = new mongoose.Schema({
    _id: String,
    aircraftTailNumber: String,
    departureAirportIata: String,
    arrivalAirportIata: String,
    departsAt: Timestamp
})