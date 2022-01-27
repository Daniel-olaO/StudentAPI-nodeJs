const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('course',{
        courseId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        professor: DataTypes.STRING,
        program: DataTypes.STRING,
        createdAt: false,
        updatedAt: false
    });
};
