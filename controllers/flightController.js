const Flights = require("../models/Flight");

exports.addFlight = async (req, res) => {
    const flight = new Flights({
        title: req.body.title,
        time: req.body.time,
        price: req.body.price,
        date: req.body.date
    })
    try{
        const newFlight = await flight.save()
        res.status(201).json(newFlight)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }

}

exports.getFlight = (req, res) => {
    res.json(res.flight)
}

exports.listAllFlights = async (req, res) => {
    try{
        const flights = await Flights.find()
        res.json(flights)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteFlight = async (req, res) => {
    try{
        await res.flight.remove()
        res.json({message: "Flight deleted"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }

}

exports.updateFlight = async  (req, res) => {
    if (req.body.title != null){
        res.flight.title = req.body.title
    }
    if (req.body.time != null){
        res.flight.time = req.body.time
    }
    if (req.body.price != null){
        res.flight.price = req.body.price
    }
    if (req.body.date != null){
        res.flight.date = req.body.date
    }
    try{
        const updatedFlight = await res.flight.save()
        res.json(updatedFlight)
    }
    catch(err){
        res.send(400).json({message: err.message})
    }
}

