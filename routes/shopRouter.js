var express = require('express');
const bodyParser = require('body-parser');

var shopRouter = express.Router();
const db = require('../config/db.config.js');
const Shop = db.shops;

shopRouter.use(bodyParser.json());

shopRouter.route('/')
.get((req,res)=>{
	Shop.findAll()
	.then(shops=>{
		res.json(shops.sort(function(c1,c2){return c1.id - c2.id}));
	}).catch(err=>{
		console.log(err);
		res.status(500).json({msg:"error", details:err});
	});
});



module.exports = shopRouter;