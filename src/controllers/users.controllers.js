const User = require('../models/users.model')
const Categories = require("../models/categories.model")
const Tasks = require("../models/tasks.model")

const getAllUsers = async (req, res) => {
    try {
        // TODO mandar a buscar a todos los usuarios
        const users = await User.findAll({
            attributes: {
                exclude: ["password"]
            },
        });
        //TODO responder al cliente
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getUserById = async (req, res) => {

    try {
        //TODO obtener el id de la ruta
       // const id = req.params.id
       const { id } = req.params;
       //TODO realizar la consulta a la base de datos
       const user = await User.findOne({
        where: {id},
        attributes: {
            exclude: ["password"]
        },
        include: [
            {
            model: Tasks,
            attributes: {
                exclude:[ "id_user", "id_category"]
            }, 
            include: {
                model: Categories
            }
        }]
       })
       //TODO responde el cliente
       res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
};

const updateUser = async (req, res) => {
    try {
        //TODO obtener el id del usuario
        //TODO obtener el body con la informacion

        const { id } = req.params;
        const data = req.body;

        //todo realizar la consulta para actulizar
        //responde a un numero (la cantidad de filas  afectadas )
        const result = await User.update(data,{
            where :{ id } // => sherthan {id : id}
        });

        // res.status(200).json( typeof result[0] )
        result[0] === "0" || result[0] === 0  ? res.status(200).json(message("User no exist, verified id!")) : 
        res.status(200).json(message("Update correct!"))
        //res.status(201).json({"status": "update correct!"});
    } catch (error) {
        res.status(400).json(error)
    }
};


const deleteUser = async (req, res) => {
    try {
        // TODO obtener el id de la ruta
        const { id } = req.params;
        //todo eliminar en la base de datos
        const result = await User.destroy({
            where : { id }
        })
        result === "0" || result === 0  ? res.status(200).json(message("User no exist, verified id!")) : 
        res.status(200).json(message("Delete correct!"))
        //res.status(200).json({"status": "deleted!"})
    } catch (error) {
        res.status(400).json(error)
    }
};

const createUser = async (req, res) => {
    //TODO manejo de de excepciones
  
    try {
      //TODO obtener la informacion del body
      const newUser = req.body; // * {email , password}
  
      //TODO mandar a crear con la informacion obtenida
       const result =  await User.create(newUser); //* {email : 'dxdxd', :password : 'ds'}
       result.id ? res.status(201).json(message("User created!")) : 
       res.status(200).json(message("User no created!"))
      //TODO responder que se ha realizado la accion
      //res.status(201).json(message("User created!"));
    } catch (error) {
      //TODO atrapar el error
      res.status(400).json(error);
    }
  };

  const message = (msg) => {
    return { "msg" : `${msg}`}
  }
module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
}