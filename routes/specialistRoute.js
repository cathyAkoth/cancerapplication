// Iniialisation and Imporatation.
const express = require('express');
const router = express.Router();
const SpecialistReg = require('../Model/SpecialistReg');


router.get('/', (req, res) => {
  if (req.session) {   
  res.render('specialistform');
  }
});

 
  router.post('/', (req, res) => { 
    const firstname = req.body.firstname;
     const lastname = req.body.lastname;
     const gender = req.body.gender;
     const specialisation = req.body.specialisation;
     const telephoneNo = req.body.telephoneNo;
     const location = req.body.location;
     const email = req.body.email;
     
     
    //  console.log(name,email)

   const specialistReg = new SpecialistReg({
       firstname,
       lastname,
       specialisation,
       gender,
       telephoneNo,
       location,
       email

       
         

   })
   specialistReg.save(err=>{
       if(err){
           console.log("err is ")
       }else{
           res.redirect('/specialistReg/list')
       }
   })
})


   
    router.get('/list', (req, res) => {
      SpecialistReg.find((err,docs)=>{
        if(err) throw err;
       
        res.render('newlistforSpecialist',{
            students : docs
        })
        
    })
})


    
    // Obtaining data to be updated.
    router.get('/update/:id',(req, res) => {
      SpecialistReg.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{
        if(err){
            console.log("cant update")
        }else{
            res.render('speceditsform',{studentdata:docs})
        }
    })
})


// Route to save the updated data.
  router.post('/update/:id',(req,res)=>{
    SpecialistReg.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
      if(err){
          console.log("err")
      }else{
          res.redirect('/specialistReg/list')
      }
  })
})

router.get('/delete/:id',(req,res)=>{
  SpecialistReg.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
       if(err){
           console.log("Err is")
       }else{
           console.log("Delted")
           res.redirect('/specialistReg/list')
       }
  })
})


  
  module.exports = router;