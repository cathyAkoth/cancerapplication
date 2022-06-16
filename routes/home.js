const express = require('express');
const Router = express.Router();
const Club = require('../model/club')

Router.get('/new',(err,res)=>{
    res.render('newoutreachform')
})

// create / insert dataf

Router.post('/add',(req,res)=>{
     const date = req.body.date;
     const location = req.body.location;
     const serialNo = req.body.serialNo
     const clientNumber = req.body.clientNumber;
     const name = req.body.name;
     const age = req.body.age;
     const sex = req.body.sex
     const nin = req.body.nin;
     const national = req.body.national;
     const district = req.body.district;
     const dob = req.body.dob;
     const subcounty = req.body.subcounty
     const village = req.body.village;
     const parish = req.body.parish;
     const tribe = req.body.tribe;
     const occupation = req.body.occupation;
     const complaint = req.body.complaint;
     const phoneNo = req.body.phoneNo;
     const riskfactor = req.body.riskfactor;
     const reffered = req.body.reffered;
     const findings = req.body.findings;
     const tests = req.body.tests;
     const result = req.body.result;
     const lesionsize = req.body.lesionsize;
     const referredTo = req.body.referredTo;
     const followUpDate = req.body.followUpDate;
     
    //  console.log(name,email)

   const club = new Club({
       date,
       location,
       serialNo,
       clientNumber,
       name,
       age,
       sex,
       nin,
       dob,
       national,
       district,
       subcounty,
       village,
       parish,
       tribe,
       occupation,
       phoneNo,
       riskfactor,
       complaint,
       findings,
       tests,
       result,
       lesionsize,
       referredTo,
       followUpDate

         

   })
   club.save(err=>{
       if(err){
           console.log("err is ")
       }else{
           res.redirect('/basic')
       }
   })
})

// find data 

Router.get('/show',(req,res)=>{
    

    Club.find((err,docs)=>{
        if(err) throw err;
       
        res.render('newspecialistlist',{
            students : docs
        })
        
    })
})

// update data

Router.get('/edit/:id',(req,res)=>{
    // console.log(req.params.id)

    Club.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{
        if(err){
            console.log("cant update")
        }else{
            res.render('neweditsform',{studentdata:docs})
        }
    })
})

Router.post('/edit/:id',(req,res)=>{
    Club.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("err")
        }else{
            res.redirect('/show')
        }
    })
})

// Del data 

Router.get('/delete/:id',(req,res)=>{
    Club.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
         if(err){
             console.log("Err is")
         }else{
             console.log("Delted")
             res.redirect('/show')
         }
    })
})



module.exports = Router;