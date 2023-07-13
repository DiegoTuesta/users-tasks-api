const Tasks = require('../models/tasks.model')


const getAllTasks = async (req, res) => {
    try {
        // TODO mandar a buscar a todos las tareas
        const tasks = await Tasks.findAll();
        //TODO responder al cliente
        res.json(tasks)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getTasksById = async (req, res) => {

    try {
        //TODO obtener el id de la ruta
       // const id = req.params.id
       const { id } = req.params;
       //TODO realizar la consulta a la base de datos
       //const user = await Tasks.findByPk(id)
       //TODO responde el cliente
       const tasks = await Tasks.findOne({
        where: {id},
       })
       res.json(tasks)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getTasksPut = async (req, res) => {
    try {
        //TODO obtener el id del usuario
        //TODO obtener el body con la informacion
        const { id } = req.params;
        const data = req.body;

        //todo realizar la consulta para actulizar
        //responde a un numero (la cantidad de filas  afectadas )
        await Tasks.update(data,{
            where :{ id } // => sherthan {id : id}
        })
        res.status(201).json({"status": "update correct!"});
    } catch (error) {
        res.status(400).json(error)
    }
};

const deleteTasks = async (req, res) => {
    try {
        // TODO obtener el id de la ruta
        const { id } = req.params;
        //todo eliminar en la base de datos
        await Tasks.destroy({
            where : { id }
        })
        res.status(200).json({"status": "deleted!"})
    } catch (error) {
        res.status(400).json(error)
    }
};

const postTasks = async (req, res) => {
    //TODO manejo de de excepciones
  
    try {
      //TODO obtener la informacion del body
      const newTask = req.body; // * {email , password}
  
      //TODO mandar a crear con la informacion obtenida
      await Tasks.create(newTask); //* {email : 'dxdxd', :password : 'ds'}
  
      //TODO responder que se ha realizado la accion
      res.status(201).json({"status": "created!"});
    } catch (error) {
      //TODO atrapar el error
      res.status(400).json(error);
    }
  };

module.exports = {
    getAllTasks,
    getTasksById,
    getTasksPut,
    deleteTasks,
    postTasks
}