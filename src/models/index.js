const { Sequelize } = require('sequelize');
const { modelConfig } = require('./config');

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL,{
	dialectOptions: {
        ssl: { rejectUnauthorized: false }
    }
});

const modelDefiners = [
	require('./course.model'),
	require('./student.model'),
	
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

modelConfig(sequelize);

module.exports = sequelize;