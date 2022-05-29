const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const outreachFormSchema = new mongoose.Schema({
  date: {
    type: Date,
    //required: 'please fill in',
  },
  location: {
    type: String,
    //required: 'please fill in',
  },
  serialNo:{
    type: String,
    //required:'please select',
},
  clientNo:{
    type: String,
    //required: 'please enter service'
  },
  name:{
    type: String,
    //required: 'please fill in',
  },
 age:{
      type: String,
      //required: 'please fill in',
  },
  sex:{
    type: String,
    //required:'please select',
  },
  nin: {
    type: String,
    //required: 'please fill in',
  },
  national:{
    type: String,
    //required:'please select',
},
  refugee:{
    type: String,
    //required: 'please enter service'
  },
  foreigner:{
    type: String,
    //required: 'please fill in',
  },
 district:{
      type: String,
      //required: 'please fill in',
  },
  subcounty:{
    type: String,
    //required:'please select',
  },
  village: {
    type: String,
    //required: 'please fill in',
  },
  parish:{
    type: String,
    //required:'please select',
},
  tribe:{
    type: String,
    //required: 'please enter service'
  },
  occupation:{
    type: String,
    //required: 'please fill in',
  },
  phoneNo:{
    type: String,
  },
  riskfactor:{
    type: String,
  }
 
 
  
  


  
})
// Export mongoose model.
module.exports = mongoose.model('OutreachForm', outreachFormSchema)