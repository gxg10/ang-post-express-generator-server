var express = require('express');
const bodyParser = require('body-parser');

var stiriRouter = express.Router();
const db = require('../config/db.config.js');
const Stire = db.stiri;

stiriRouter.use(bodyParser.json());

stiriRouter.route('/')
.get((req,res)=>{
	Stire.findAll().then(stiri=>{
		res.json(stiri.sort(function(c1, c2){return c1.id - c2.id}));	
	}).catch(err=>{
		console.log(err);
		res.status(500).json({msg:"err", details:err});
	});
})
.post((req,res)=>{
	Stire.create({
		"titlu":req.body.titlu,
		"continut":req.body.continut
	}).then(stire=>{
		res.json(stire);
	}).catch(err=>{
		console.log(err);
		res.status(500).json({msg:"err", details:err});
	});
});

module.exports = stiriRouter;