const mongoos = require('mongoose');
const schema = mongoos.Schema;

let responseScheema = new schema({
  creationTime: Date,
    modificationTime: Date,
  message: {
    type: String,
    //required: 'please fill in',
  },
 
  specialistName:{
    type: String,
    //required:'please select',
},
  email:{
    type: String,
    //required: 'please enter service'
  },
  phone:{
    type: String,
    //required: 'please fill in',
  },
 response:{
      type: String,
      //required: 'please fill in',
  },
  
 
createdAt: {
  type: Date,
  
  
  
  default: Date.now()
  //default: Date.toUTCString
  
},




     
     
})

module.exports = mongoos.model('response', responseScheema)