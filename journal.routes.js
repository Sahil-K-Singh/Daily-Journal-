const express=require('express');
const{getjournal,postJournal}=require('../controllers/jounral.controllers');
const router=express.Router();
router.get('/getjournal',getjournal);
router.post('/postjournal',postJournal);
module.exports = router;