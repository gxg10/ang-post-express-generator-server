const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
	dialect: env.dialect,
	operatorsAliases: false,

	pool: {
		max: env.max,
		min: env.pool.min,
		acquire: env.pool.acquire,
		idle: env.pool.idle
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.shops = require('../model/shop.model.js')(sequelize, Sequelize);
db.stiri = require('../model/stire.model.js')(sequelize, Sequelize);
db.files = require('../model/file.model.js')(sequelize, Sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;