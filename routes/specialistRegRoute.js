// Iniialisation and Imporatation.
const express = require('express');
const router = express.Router();
const SpecialistReg = require('../models/SpecialistReg');


router.get('/specialistReg', (req, res) => {
  if (req.session) {   
  res.render('specialistReg');
  }
});

 
  router.post('/specialistReg', async(req, res) => { 
    if (req.session) {
    try{
    console.log(req.body)
    const specialistReg = new SpecialistReg(req.body);
    
    await specialistReg.save()
    res.redirect('/specialist')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
    }
    }

    })

    
    router.get('/', async (req, res) => {
      try {
        
        let specialistRegDetails = await SpecialistReg.find();
        if (req.query.lastname) {
          specialistRegDetails = await SpecialistReg.find({ lastname: req.query.lastname })
        }
        res.render('specialistRegList', { users: specialistRegDetails, title: 'Specialist list' })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive specialist details');
    }
    })

    
    // Obtaining data to be updated.
    router.get('/update/:id', async (req, res) => {
      try {
          const updateSpe = await SpecialistReg.findOne({ _id: req.params.id })
          res.render('updateSpecialist', { user: updateSpe })
      } catch (err) {
          res.status(400).send("Unable to find item in the database");
      }
    })


// Route to save the updated data.
  router.post('/update', async (req, res) => {
    try {
        await SpecialistReg.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/specialist');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
  })

/
router.post('/delete', async (req, res) => {
  try {
      await SpecialistReg.deleteOne({ _id: req.body.id })
      res.redirect('back')
  } catch (err) {
      res.status(400).send("Unable to delete item in the database");
  }
})


  
  module.exports = router;