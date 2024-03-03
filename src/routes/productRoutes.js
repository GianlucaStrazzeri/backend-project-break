//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js
const router=express.Router(); //inicializo enrutador de express
const {Product} = require("../models/Product.js");
const {templateform}= require("../models/template.js");
const ProductController= require("../controllers/productController.js")

router.get("/products",ProductController.getProduct );
router.get("/dashboard",ProductController.getDashboard);
router.get("/products/id/:_id", ProductController.getProductsID );
router.get("/dashboard/id/:_id", ProductController.getDasboardID );
router.post("/dashboard", ProductController.postDasboard);
router.get("/dashboard/new",ProductController.getDasboardNew);
router.delete("/dashboard/id/:_id", ProductController.deleteDashboardID );



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











module.exports = {router}; //exporto el enrutador importante hay que exportar y importar de la misma forma