/**
 * UsuariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  get: async(req,res)=> {
    const query = "SELECT * FROM usuarios U JOIN contacto C WHERE U.idUsuario=C.idUsuario";
    var search = await Usuarios.getDatastore().sendNativeQuery(query);
    search = JSON.parse(JSON.stringify(search.rows));
    console.log(search)
    return res.view("pages/listado", {
        layout: "layouts/layout",
        consulta: search,
    })
   
  }

};

