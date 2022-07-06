const express = require('express');
const Router = express.Router();
const Response = require('../model/Response')

Router.get('/response',(err,res)=>{
    res.render('response')
})



Router.post('/addresponse',(req,res)=>{
     
     const message = req.body.message;
     const specialistName = req.body.specialistName;
     const email = req.body.email;
     const phone = req.body.phone;
     const response = req.body.response;
     
     
    //  console.log(name,email)

   const responses = new Response({
       message,
       specialistName,
       email,
       phone,
       response,
       

         

   })
   responses.save(err=>{
       if(err){
           console.log("err is ")
       }else{
           res.redirect('/response/showresponse')
       }
   })
})

// find data 

Router.get('/showresponse',(req,res)=>{
    

    Response.find((err,docs)=>{
        if(err) throw err;
       
        res.render('patientDahboard',{
            students : docs
        })
        
    })
})

// update data

Router.get('/response/edit/:id',(req,res)=>{
    // console.log(req.params.id)

    Response.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{
        if(err){
            console.log("cant update")
        }else{
            res.render('responseeditsform',{studentdata:docs})
        }
    })
})

Router.post('/updat/:id',(req,res)=>{
    Response.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("err")
        }else{
            res.redirect('/showresponse')
        }
    })
})

// Del data 

Router.get('/delete/:id',(req,res)=>{
    Response.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
         if(err){
             console.log("Err is")
         }else{
             console.log("Delted")
             res.redirect('/showresponse')
         }
    })
})



module.exports = Router;