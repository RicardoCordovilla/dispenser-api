const { DataTypes } = require('sequelize')
const db = require('../database')

const Secuencias = db.define('secuencias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    timestr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: true
    },
    steps: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
    }
},{timestamps:false})

module.exports = Secuencias