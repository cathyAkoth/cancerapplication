const Mongoose = require("mongoose");
const { init } = require("./club");

const CounterSchema = new Mongoose.Schema({
   
  value: {
    type: Number,
    
  },
  clientNumber: {
    type: Number,
    
    
  },
});

const Counter = Mongoose.model("counter", CounterSchema);

module.exports = Counter;