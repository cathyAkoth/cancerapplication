// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const specialistRegSchema = new mongoose.Schema({
  firstname: {
    type: String,
    //required: 'please fill in',
  },
  lastname: {
    type: String,
    //required: 'please fill in',
  },
  gender:{
      type: String,
      //required:'please select',
  },
  specialisation:{
    type: String,
    //require: 'please enter service'
  },
  location:{
      type: String,
      //required: 'please fill in',
  },
  telephoneNo:{
    type: String,
    //required:'please select',
  },
  email:{
  type: String,
  //unique: true,
  //require: 'please enter '
  },
  


  
})
// Export mongoose model.
module.exports = mongoose.model('SpecialistReg', specialistRegSchema)