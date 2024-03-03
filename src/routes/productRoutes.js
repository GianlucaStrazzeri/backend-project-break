//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js
const router=express.Router(); //inicializo enrutador de express
const {Product} = require("../models/Product.js");//Requiero Product de model, cuando tendré todos los controles lo eliminaré y se quedará solo en productController.js
const ProductController= require("../controllers/productController.js")

router.get("/products",ProductController.getProduct );//Funciona? ... NO! devuelve todos los productos pero Cada producto  tendrá un enlace a su página de detalle. y no lo hace, le falta formato
router.get("/dashboard",ProductController.getDashboard);//Funciona? ...NO! Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
router.get("/products/id/:_id", ProductController.getProductsID );//Funciona? ...
router.get("/dashboard/id/:_id", ProductController.getDasboardID );//Funciona? ...
router.post("/dashboard", ProductController.postDasboard);//Funciona? ...
router.get("/dashboard/new",ProductController.getDasboardNew);//Funciona? ...
router.delete("/dashboard/id/:_id", ProductController.deleteDashboardID );//Funciona? ...

//GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
//NO FUNCIONA
router.get("dashboard/:_id/edit", async (req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        
        res.send(product,templateform);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the product with id number: " +
                req.params._id,
        });
    }
});



module.exports = {router}; //exporto el enrutador --->[exportar y importar de la misma forma!!]