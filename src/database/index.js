const { Sequelize } = require('sequelize');
const { modelConfig } = require('./config');

var sequelize = new Sequelize(process.env.DB_CONNECTION_URLII);

const modelDefiners = [
	require('./models/course.model'),
	require('./models/student.model'),
	
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

modelConfig(sequelize);

module.exports = sequelize;