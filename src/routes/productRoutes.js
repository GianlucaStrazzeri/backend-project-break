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

//GET /dashboard/new
router.get("/dashboard/new", (req,res)=>{//Ruta Read dashboard/new
const template=`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Dashboard</title>
    <link rel="stylesheet" href="./public/styles.css">
</head>
<body>
    <div class="title">
        <div>
             <h1>Pagína de inicio </h1>
        </div>
        
        <div>
            <h2>Crear Producto</h2>
        </div>  
    </div>
    
    <div class="nav">
       <a href="./index.html"> <h3>Productos</h3></a>
       <a href=""> <h3>Camisetas</h3></a>
       <a href=""> <h3>Pantalones</h3></a>
       <a href=""> <h3>Zapatos</h3></a>
       <a href=""> <h3>Accessorios</h3></a>
       <a href="./index.html"> <h3>Logout</h3></a>
    </div>

    <div class="form">
        <form action="post">
            <div>
                <label class="formitem">Add Product  </label>
            </div>
            <div class="formitem">
                <input type="text" value="nombre" />
            </div>   
            <div class="formitem">
                <input type="text" value="descripción" />
            </div>
            <div class="formitem">
                <input type="text" value="imagen" />
            </div>
            <div class="formitem">
                <input type="text" value="categoria"  />
                
            </div>
            <div class="formitem">
                <select name="talla">
                    <option value="XL">Talla: XL</option>
                    <option value="L">Talla: L</option>
                    <option value="M" selected>Talla: M</option>
                    <option value="S">Talla: S</option>
                  </select>
            </div>
            <div class="formitem">
                <input type="number" value="precio" />
            </div>
            
             <div class="formitemsubmit">
                <input type="submit" />
            </div>
                
                
        </form>
    </div>
   
    
</body>
</html>`
    
        res.send(template)


        
   
    
})

module.exports = {router}; //exporto el enrutador importante hay que exportar y importar de la misma forma