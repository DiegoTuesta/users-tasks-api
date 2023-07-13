const  { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Tasks = db.define("tasks",{
    "id_category" : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    "id_user":{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title : {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description : {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    completed : {
            type:DataTypes.BOOLEAN,
            defaultValue: false
    }
});

module.exports = Tasks