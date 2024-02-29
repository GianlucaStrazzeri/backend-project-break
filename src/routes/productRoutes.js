//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js

const router=express.Router(); //inicializo enrutador de express
const Product = require("../models/Product.js");

let Products = [//listado de productos ejemplos para que aparezcan en localHost//3005 de forma estructurada
    {  nombre: "Camiseta azúl", descripción:"ropa", imagen:"./",categoria:"camisetas", talla:"S",precio:4.50 },
  ];

router.get("/products",(req,res)=>{//Ruta Read products
    res.send(Products)//Utilizo res.json (products porqué debería enviarme un archivo de objetos de productos)
})

//Ruta Read dashboard
router.post("/dashboard",(req,res)=>{
    res.send(Products)
    const nuevoProducto={
        nombre: req.body.nombre, 
        descripción:req.body.descripción, 
        imagen:req.body.imagen,
        categoria:req.body.categoria, 
        talla:req.body.talla,
        precio:req.body.precio 
    }
    Products.push(nuevoProducto)
})

//GET /products/:productId
router.get("/products:productId",async (req,res)=>{//Ruta Read products id

    try {
        const product = await Product.findById(req.params._id);//_id bajo se utiliza porqué lo especifica así mongo
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the product with _id number: " +
                req.params._id,
        });
    }
})

module.exports = {router}; //exporto el enrutador importante hay que exportar y importar de la misma forma