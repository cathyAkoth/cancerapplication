const express = require('express');
const router = express.Router();
const  OutreachForm = require('../models/OutreachForm');


router.get('/get', (req, res) => {
     
  res.render('outreachForm');

});

  
  router.post('/', async(req, res) => { 
    
    try{
    console.log(req.body)
    const outreachForm = new OutreachForm (req.body);
    
    await outreachForm.save()
    res.redirect('/outreachForm/outreach')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
   
    }

    })

    router.get('/outreach', async (req, res) => {
      try {
          
          let outreachFormDetails = await OutreachForm.find();
          if (req.query.role) {
            outreachFormDetails = await OutreachForm.find({ role: req.query.role })
            }
          res.render('outreachList', { users: outreachFormDetails, title: 'outreach List' })
      } catch (err) {
          res.send('Failed to retrive outreach details');
      }
  })

   // Obtaining data to be updated.
   router.get('/update/:id', async (req, res) => {
    try {
        const updateOut = await OutreachForm.findOne({ _id: req.params.id })
        res.render('updateoutreach', { user: updateOut })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
  })


// Route to save the updated data.
router.post('/update', async (req, res) => {
  try {
      await OutreachForm.findOneAndUpdate({_id:req.query.id}, req.body)
      res.redirect('/outreachForm/outreach');
  } catch (err) {
      res.status(404).send("Unable to update item in the database");
  }
})


  
  router.post('/delete', async (req, res) => {
    try {
        await OutreachForm.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})



  
  module.exports = router;