function modelConfig(sequelize) {
	const { course, student } = sequelize.models;

	student.hasMany(course);
	course.hasMany(student)
}

module.exports = { modelConfig };