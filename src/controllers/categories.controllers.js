const Categories = require('../models/categories.model')



const getAllCategory = async (req, res) => {
    try {
        // TODO mandar a buscar a todos las categorias
        const categories = await Categories.findAll();
        //TODO responder al cliente
        res.json(categories)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getCategoryById = async (req, res) => {

    try {
        //TODO obtener el id de la ruta
       // const id = req.params.id
       const { id } = req.params;
       //TODO realizar la consulta a la base de datos
       const category = await Categories.findByPk(id)
       //TODO responde el cliente
       res.json(category)
    } catch (error) {
        res.status(400).json(error)
    }
};

const getCategoryPut = async (req, res) => {
    try {
        //TODO obtener el id del usuario
        //TODO obtener el body con la informacion
        const { id } = req.params;
        const data = req.body;

        //todo realizar la consulta para actulizar
        //responde a un numero (la cantidad de filas  afectadas )
        await Categories.update(data,{
            where :{ id } // => sherthan {id : id}
        })
        res.status(201).json({"status": "update correct!"});
    } catch (error) {
        res.status(400).json(error)
    }
};

const deleteCategory = async (req, res) => {
    try {
        // TODO obtener el id de la ruta
        const { id } = req.params;
        //todo eliminar en la base de datos
        await Categories.destroy({
            where : { id }
        })
        res.status(200).json({"status": "deleted!"})
    } catch (error) {
        res.status(400).json(error)
    }
};

const postCategory = async (req, res) => {
    //TODO manejo de de excepciones
  
    try {
      //TODO obtener la informacion del body
      const newCategory = req.body; // * {email , password}
  
      //TODO mandar a crear con la informacion obtenida
        await Categories.create(newCategory); //* {email : 'dxdxd', :password : 'ds'}
  
      //TODO responder que se ha realizado la accion
      res.status(201).json({"status": "created!"});
    } catch (error) {
      //TODO atrapar el error
      res.status(400).json(error);
    }
  };

module.exports = {
    getAllCategory,
    getCategoryById,
    getCategoryPut,
    deleteCategory,
    postCategory
}