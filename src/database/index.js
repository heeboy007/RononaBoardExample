
const Sequelize = require('sequelize');

const config = {
	host: process.env.RONONABOARD_MYSQL_HOST || '127.0.0.1',
	port: 3306,
	database: 'rononaboard',
	user: 'rononaboard_admin',
	password: process.env.RONONABOARD_MYSQL_PASSWORD || 'mySSSback12#$5',
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	dialect: 'mysql',
});

module.exports = {
	sequelize,
	GlobalStat: require('./global-stat.model')(sequelize),
}