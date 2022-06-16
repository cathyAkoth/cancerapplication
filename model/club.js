const mongoos = require('mongoose');
const schema = mongoos.Schema;

let clubScheema = new schema({
  creationTime: Date,
    modificationTime: Date,
  date: {
    type: Date,
    //required: 'please fill in',
  },
  clientNumber:{
    type: Number,
  },
  location: {
    type: String,
    //required: 'please fill in',
  },
  serialNumber:{
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
  gender:{
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
  dob:{
    type: String,
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
  },
 reffered:{
   type: String,
 },
 complaint:{
   type: String
 },
 findings:{
  type: String,
  //immutable: true
  //required: 'please fill in',
},
tests:{
  type: String,
  //immutable: true
},
result:{
  type: String,
  immutable: true
},
lesionsize:{
 type: String,
 immutable: true
},
referredTo:{
  type: String,
  immutable: true
  //required: 'please fill in',
},
followUpDate:{
  type: String,
  //immutable: true
},
createdAt: {
  type: Date,
  
  
  
  default: Date.now()
  //default: Date.toUTCString
  
},




     
     
})

module.exports = mongoos.model('student', clubScheema)