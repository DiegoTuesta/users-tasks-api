
const Users= require('./users.model');
const Tasks = require('./tasks.model');
const Categories = require('./categories.model');


const initModels = () => {

Tasks.belongsTo(Users, { foreignKey : 'id_user' })
Users.hasMany(Tasks, { foreignKey : 'id_user' } )

Tasks.belongsTo(Categories, { foreignKey:  "id_category"  })
Categories.hasMany(Tasks, { foreignKey: "id_category" })

};

module.exports = initModels;