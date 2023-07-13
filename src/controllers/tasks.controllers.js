const Categories = require('../models/categories.model');
const Tasks = require('../models/tasks.model')


const getAllTasks = async (req, res) => {
    try {
        // TODO mandar a buscar a todos las tareas
        const tasks = await Tasks.findAll();
        //TODO responder al cliente
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getTaskById = async (req, res) => {

    try {
        //TODO obtener el id de la ruta
       // const id = req.params.id
       const { id } = req.params;
       //TODO realizar la consulta a la base de datos
       //const user = await Tasks.findByPk(id)
       //TODO responde el cliente
       const tasks = await Tasks.findOne({
        where: {id},
        include: {
            model: Categories,
            attributes: {
                exclude: ['id']
            }
        }
       })
       res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json(error)
    }
};

const updateTask = async (req, res) => {
    try {
        //TODO obtener el id del usuario
        //TODO obtener el body con la informacion
        const { id } = req.params;
        const data = req.body;

        //todo realizar la consulta para actulizar
        //responde a un numero (la cantidad de filas  afectadas )
        const result = await Tasks.update(data,{
            where :{ id } // => sherthan {id : id}
        })
        result[0] === "0" || result[0] === 0  ? res.status(200).json(message("Task no exist, verified id!")) : 
        res.status(200).json(message("Update correct!"))

        //res.status(201).json({"status": "update correct!"});
    } catch (error) {
        res.status(400).json(error)
    }
};

const deleteTask = async (req, res) => {
    try {
        // TODO obtener el id de la ruta
        const { id } = req.params;
        //todo eliminar en la base de datos
        const result = await Tasks.destroy({
            where : { id }
        })
        result === "0" || result === 0  ? res.status(200).json(message("Task no exist, verified id!")) : 
        res.status(200).json(message("Delete correct!"))
        //res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
};

const createTask = async (req, res) => {
    //TODO manejo de de excepciones
  
    try {
      //TODO obtener la informacion del body
      const newTask = req.body; // * {email , password}
  
      //TODO mandar a crear con la informacion obtenida
      const result = await Tasks.create(newTask); //* {email : 'dxdxd', :password : 'ds'}
      result.id ? res.status(201).json(message("Task created!")) : 
      res.status(200).json(message("Task no created!"))
      //TODO responder que se ha realizado la accion
      //res.status(201).json({"status": "created!"});
    } catch (error) {
      //TODO atrapar el error
      res.status(400).json(error);
    }
  };
  const message = (msg) => {
    return { "msg" : `${msg}`}
  }
module.exports = {
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    createTask
}