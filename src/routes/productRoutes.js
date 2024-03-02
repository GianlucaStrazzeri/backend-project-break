//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js
const router=express.Router(); //inicializo enrutador de express
const {Product} = require("../models/Product.js");
const {templateform}= require("../models/template.js");
const ProductController= require("../controllers/productController.js")

//Ruta get products
router.get("/products",ProductController.getProduct );

//Ruta get dashboard
router.get("/dashboard",async (req,res)=>{
    try {
        const products = await Product.find();//Find es un metodo de mongo que te permite encontrar todos los productos en este caso
        res.send(products);
    } catch (error) {
        console.error(error);
    }
})

//Ruta get products/id/:_id
router.get("/products/id/:_id", async(req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the product with id number: " +
                req.params._id,
        });
    }
}, )

//Ruta get dashboard/id/:_id
router.get("/dashboard/id/:_id", async(req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the product with id number: " +
                req.params._id,
        });
    }
}, )


//Ruta Post dashboard
router.post("/dashboard",async (req,res)=>{
    try{
        const product= await Product.create({...req.body})
    res.status(201).json(product)
    } catch (error){console.log(error)}
})

//GET /dashboard/new
router.get("/dashboard/new", (req,res)=>{//Ruta Read dashboard/new
res.send(templateform)
})

//Delete a Product using id
router.delete("/dashboard/id/:_id", async (req,res)=>{
    try{
        const id=req.params._id;
        const product = await Product.findByIdAndDelete(id);
            res.json({mensaje:"The product that you have already deleted is:", product})
    }
    catch (error){
        console.error(error);
        res.status(500).send({
        message: "There was a problem deleting the product with id number: " +
                    req.params._id,
            });
    }
    })



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