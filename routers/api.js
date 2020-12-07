const express=require('express');
const Menu=require('../models/menuModule');
const Event=require('../models/eventModule');
const Projects=require('../models/projectsModule');
const News=require('../models/newsModule');
const About=require('../models/aboutModule');
const Sign=require('../models/signModule');
const Volunteer=require('../models/volunteersModule');
const router=express.Router();

// ----------------------------MENU ----------------------------
router.get("/get-menu", (req, res) => {
    
    Menu.find({ })
      .then((data) => {
        res.status(200).json(data);        
      })  
      .catch((error) =>{
        res.status(434).json(error); 
      });
});

// ------------------------------- EVENT ---------------------------------
router.get("/get-event", (req, res) => {
  
  Event.find({ })
    .then((data)=>{
      res.status(200).json(data);
    })
    .catch((error)=>{
      res.status(434).json(error);
    });
})

// ----------------------------- PROJECTS ----------------------------
router.get("/get-project", (req, res) => {
  
  Projects.find({ })
    .then((data)=>{
      res.status(200).json(data);
    })
    .catch((error)=>{
      res.status(434).json(error);
    });    
})

// ------------------------------- NEWS ---------------------------------
router.get("/get-news", (req, res) => {
  
  News.find({ })
    .then((data)=>{
      res.status(200).json(data);
    })
    .catch((error)=>{
      res.status(434).json(error);
    });      
})

// ------------------------------- ABOUT ---------------------------------
router.get("/get-about", (req, res) => {
  
  About.find({ })
  .then((data)=>{
    res.status(200).json(data);
  })
  .catch((error)=>{
    res.status(434).json(error);
  });      
})

// ------------------------------- SIGNIN ---------------------------------
router.post('/add-sign', (req,res)=>{
  const {  name, gender, region, date, number, email, password, where, status } = req.body;

  const sign = new Sign({
    name, gender, region, date, number, email, password, where, status
})

sign
  .save()
  .then(data => {
    // geriye front end-e gonderecem
    res.status(200).json({ signData: data })
  })
  .catch(err => {
    console.log('error', err)
  }) 
})

// ------------------------------- VOLUNTEER ---------------------------------
router.get("/get-volunteer", (req, res) => {
  
  Volunteer.find({ })
  .then((data)=>{
    res.status(200).json(data);
  })
  .catch((error)=>{
    res.status(434).json(error);
  });      
})

router.post('/add-volunteer', (req,res)=>{
  const {  name, surname, number, email, status } = req.body;

  const volunteer = new Volunteer({
    name, surname, number, email, status
})

volunteer
  .save()
  .then(data => {
    // geriye front end-e gonderecem
    res.status(200).json({ volunteerData: data })
  })
  .catch(err => {
    console.log('error', err)
  }) 
})

module.exports = router;