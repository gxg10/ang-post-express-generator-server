module.exports = (sequelize, Sequelize) =>{
	const Stire = sequelize.define('stire', {
		titlu: {
			type: Sequelize.STRING
		},
		continut: {
			type: Sequelize.STRING
		}
	});
	return Stire
}