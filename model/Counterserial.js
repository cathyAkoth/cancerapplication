const Mongoose = require("mongoose");
const { init } = require("./club");

const CounterserialSchema = new Mongoose.Schema({
   
  value: {
    type: Number,
    
  },
  serialNumber: {
    type: Number,
    
    
  },
});

const Counterserial = Mongoose.model("counterserial", CounterserialSchema);

module.exports = Counterserial;