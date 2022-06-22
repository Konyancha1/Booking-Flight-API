const mongoose = require("mongoose");

const flightDetails = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  });
  
module.exports = mongoose.model("Flights", flightDetails)