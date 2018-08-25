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
})
.post((req,res)=>{
	Customer.create({
		"firstname":req.body.firstname,
		"lastname":req.body.lastname,
		"age":req.body.age
	}).then(customer=>{
		res.json(customer);
	}).catch(err=>{
		console.log(err);
		res.status(500).json({msg:"error", details:err});
	});
})
.put((req,res)=>{
	const id = req.body.id;
	Customer.update( req.body,
		{where: {id: id}}).then(()=>{
			res.status(200).json({msg:"Update Successfully -> CUstomer Id ="+ id});
		}).catch(err=>{
			console.log(err);
			res.status(500).json({msg: "error", details:err});
		});
});

customerRouter.route('/:id')
.get((req,res)=>{
	Customer.findById(req.params.id).then(customer=>{
		res.json(customer);
	}).catch(err=>{
		console.log(err);
		res.status(500).json({msg:"error",details:err});
	});
})
.delete((req,res)=>{
	const id = req.params.id;
	Customer.destroy({
		where: {id: id }
	}).then(()=>{
		res.status(200).json({ msg: "Delete Successfully -> Customer id ="+id});
	}).catch(err=>{
		console.log(err);
		res.status(500).json({msg:"error", details:err});
	});
});


module.exports = customerRouter;