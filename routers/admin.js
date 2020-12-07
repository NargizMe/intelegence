const express=require('express');
const Password=require('../models/passwordModule');
const BrainRing=require('../models/brainRingModule');
const router=express.Router();

// ----------------------------------PAROL----------------------
router.get("/get-parol", (req, res) => {
  
  Password.find({})
    .then((data)=>{
      res.status(200).json(data);
    })
    .catch((error)=>{
      res.status(434).json(error);
    }); 
});

router.put("/change-parol/:id", (req, res) => {
const { id } = req.params;
const { password } = req.body;

Password.findByIdAndUpdate(
  { _id: id }, 
  { $set: { password } }, 
  { new: true },
  (err, result) => {
    if (err) {
      console.log('error', err)
      res.status(404).json({ question: "question not found." })
    } else {
      res.status(200).json({ question: result })
    }
});
})

// ------------------------------- BRAIN-RING ---------------------------------
router.get("/get-brainRing", (req, res) => {
  
  BrainRing.find({})
   .then((data)=>{
      res.status(200).json(data);
    })
    .catch((error)=>{
      res.status(434).json(error);
    });     
})

router.put("/delete-brainRing", (req, res) => {
  const { status, _id } = req.body;
  
  BrainRing.findByIdAndUpdate(
    { _id: _id }, 
    { $set: { status } }, 
    { new: true },
    (err, result) => {
      if (err) {
        console.log('error', err)
        res.status(404).json({ question: "Sorry, internal server errors" })
      } else {
        res.status(200).json({ question: result })
      }
  });
  })

module.exports = router;