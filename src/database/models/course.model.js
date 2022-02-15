const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define("Courses",{
        courseId:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        professor: DataTypes.STRING,
        program: DataTypes.STRING,
    },{
        // freezeTableName: true,
        tableName: "Courses"
    });
};
