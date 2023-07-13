const  { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('categories',{
    title : {
        type: DataTypes.STRING(30),
        allowNull:false,
        unique: true
    },
    description : {
        type:DataTypes.STRING(100),
        allowNull: true,
    },
},{
    timestamps:false
}
);

module.exports = Categories;