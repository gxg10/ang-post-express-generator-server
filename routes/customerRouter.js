var express = require('express');
const bodyParser = require('body-parser');

var customerRouter = express.Router();
const db = require('../config/db.config.js');
const Customer = db.customers;

customerRouter.use(bodyParser.json());

customerRouter.route('/')
.get((req, res)=> {
	Customer.findAll()
	.then(customers=>{
		res.json(customers.sort(function(c1, c2){return c1.id - c2.id}));
	}).catch(err=>{
		console.log(err);
		res.status(500).json({msg:"error", details:err});
	});
});


module.exports = customerRouter;