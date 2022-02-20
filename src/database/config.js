function modelConfig(sequelize) {
	let { Courses, Student } = sequelize.models;

	Student.hasMany(Courses);
}

module.exports = { modelConfig };