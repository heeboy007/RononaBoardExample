const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./src/database');
const globalStatController = require('./src/controller/global-stat.controller.js');
const keyValueController = require('./src/controller/key-value.controller.js');

async function launchServer() {

	const app = express();
	app.use(bodyParser.json());
	
	app.get('/global-stats', globalStatController.getAll);
	app.post('/global-stats', globalStatController.insertOrUpdate);
	app.delete('/global-stats', globalStatController.remove);
	
	app.get('/key-value/:key', keyValueController.get);
	app.post('/key-value', keyValueController.insertOrUpdate);
	app.delete('/key-value/:key', keyValueController.remove);
	
	app.get('/', (req, res) => {
		res.json({ message: 'Hello RononaBoard!' });
	});
	
	try {
		await sequelize.sync();
		//await sequelize.sync({ alter:true });
		console.log('Database is ready!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error);
		process.exit(1);
	}

	const port = process.env.port || 8080;
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
	
};

launchServer();