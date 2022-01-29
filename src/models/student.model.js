const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('student',{
        studentId:{
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING,
        },
        program:{
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        createdAt: false,
        updatedAt: false
    });
}
