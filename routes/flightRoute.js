const express = require('express');
const Flights = require("../models/Flight");
const router = express.Router();
const controller = require('../controllers/flightController');

router.post('/', controller.addFlight);
router.get('/', controller.listAllFlights);
router.patch('/:id', get_flight, controller.updateFlight);
router.get('/:id', get_flight, controller.getFlight);
router.delete('/:id', get_flight, controller.deleteFlight);

async function get_flight(req, res, next){
    let flight
    try{
        flight = await Flights.findOne({title: req.params.id})
        if (flight == null){
            return res.status(404).json({message: "There is no such flight"})
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.flight = flight
    next()
}


module.exports = router;

