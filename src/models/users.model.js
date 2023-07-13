const  { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Users = db.define('users',
{
    name : {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email : {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique: true,
        validate: {
            isEmail:true,
        }
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
},{
    timestamps: false
}
);

module.exports = Users;