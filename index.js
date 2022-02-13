const express = require ('express')
const req = require('express/lib/request')
const fs = require("fs")
const { Timestamp } = require('bson')

const server = express()

server.get('/ping', function(req, res) {
    res.send('pong')
})

server.get('/aircrafts/:tailNumber', function(req, res) {
    fs.readFile("./data/aircrafts.json", 'utf8', function(err, data)  {
        const aircrafts = JSON.parse(data)
        const aircraft = aircrafts.find(function(e) {
            return e.tailNumber==req.params.tailNumber
        })
        res.send(JSON.stringify(aircraft))
    })

})

server.get('/airports', function(req, res) {
    const name =  req.query.name
    fs.readFile("./data/airports.json", 'utf8', function(err, data)  {
        const airports = JSON.parse(data)
        const airport = airports.filter((airport) => airport.name.includes(name))
        res.send(JSON.stringify(airport))
    })

})

server.get('/flights', function(req, res) {
    const fromIata =  req.query.from
    const toIata = req.query.to
    const atTimestamp = Number(req.query.at)

    fs.readFile("./data/flights.json", 'utf8', function(err, data)  {
        const flights = JSON.parse(data)
        const flight = flights.filter((flight) => flight.departureAirportIata === fromIata & flight.arrivalAirportIata === toIata & flight.departsAt >= atTimestamp)
        res.send(JSON.stringify(flight))
    })
})

server.listen(3000, function () {
    console.log("Server is up and running on port 3000..")
});