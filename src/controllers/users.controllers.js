const User = require('../models/users.model')
const Categories = require("../models/categories.model")
const Tasks = require("../models/tasks.model")

const getAllUsers = async (req, res) => {
    try {
        // TODO mandar a buscar a todos los usuarios
        const users = await User.findAll();
        //TODO responder al cliente
        res.json(users)
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
       res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getUSerPut = async (req, res) => {
    try {
        //TODO obtener el id del usuario
        //TODO obtener el body con la informacion
        const { id } = req.params;
        const data = req.body;

        //todo realizar la consulta para actulizar
        //responde a un numero (la cantidad de filas  afectadas )
        await User.update(data,{
            where :{ id } // => sherthan {id : id}
        })
        res.status(201).json({"status": "update correct!"});
    } catch (error) {
        res.status(400).json(error)
    }
};

const deleteUser = async (req, res) => {
    try {
        // TODO obtener el id de la ruta
        const { id } = req.params;
        //todo eliminar en la base de datos
        await User.destroy({
            where : { id }
        })
        res.status(200).json({"status": "deleted!"})
    } catch (error) {
        res.status(400).json(error)
    }
};

const postUser = async (req, res) => {
    //TODO manejo de de excepciones
  
    try {
      //TODO obtener la informacion del body
      const newUser = req.body; // * {email , password}
  
      //TODO mandar a crear con la informacion obtenida
        await User.create(newUser); //* {email : 'dxdxd', :password : 'ds'}
  
      //TODO responder que se ha realizado la accion
      res.status(201).json({"status": "user created!"});
    } catch (error) {
      //TODO atrapar el error
      res.status(400).json(error);
    }
  };

module.exports = {
    getAllUsers,
    getUserById,
    getUSerPut,
    deleteUser,
    postUser
}