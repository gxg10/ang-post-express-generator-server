module.exports = (sequelize, Sequelize)=>{
	const Test = sequelize.define('test', {
		nume: {
			type: Sequelize.STRING
		},
		obiect: {
			type: Sequelize.STRING
		},
		numar: {
			type: Sequelize.INTEGER
        },
        volum: {
            type: Sequelize.INTEGER
        }
	});
	return Test
}