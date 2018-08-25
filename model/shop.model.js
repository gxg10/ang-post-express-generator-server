module.exports = (sequelize, Sequelize)=>{
	const Shop = sequelize.define('shop', {
		name: {
			type: Sequelize.STRING
		},
		location: {
			type: Sequelize.STRING
		},
		cod: {
			type: Sequelize.INTEGER
		}
	});
	return Shop
}