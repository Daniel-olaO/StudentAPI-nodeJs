const CourseSchema = require('./courses.model');
const StudentSchema = require('./students.model');
const connection = require('../config/db');

<<<<<<< HEAD:src/models/index.js
const Course = connection.model('Course', CourseSchema);
const Student = connection.model('Student', StudentSchema);

module.exports = {
  Course,
  Student
};
=======
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
>>>>>>> f86d28d1f93e64230abff7e2c9ff7b2cc25052bf:src/database/index.js
