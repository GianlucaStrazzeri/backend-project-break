//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js
const router=express.Router(); //inicializo enrutador de express

const Product = require("../models/Product.js");


// let Products = [//listado de productos ejemplos para que aparezcan en localHost//3005 de forma estructurada
//     {  nombre: "Camiseta azúl",
//      descripción:"ropa",
//       imagen:"https://www.zalando.es/next-sports-standard-camiseta-basica-cobalt-blue-nx343d001-k11.html?size=3a&allophones=0&wmc=SEM340_NB_GO._3922365855_680653101_35177162592.&opc=2211&mpp=google|v1||pla-297546631617||1005402||g|c||149809974124||pla|NX343D001-K11003Y000|297546631617|1|&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNZfPiEXEa_yYXZbBG0EqsMO_cyWcoeo4zpIp0mXG-7f_RWKzXp1g8xoCXuMQAvD_BwE",
//       categoria:"camisetas",
//        talla:"S",
//        precio:4.50 },{  nombre: "Camiseta azúl",
//        descripción:"ropa",
//         imagen:"https://www.zalando.es/next-sports-standard-camiseta-basica-cobalt-blue-nx343d001-k11.html?size=3a&allophones=0&wmc=SEM340_NB_GO._3922365855_680653101_35177162592.&opc=2211&mpp=google|v1||pla-297546631617||1005402||g|c||149809974124||pla|NX343D001-K11003Y000|297546631617|1|&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNZfPiEXEa_yYXZbBG0EqsMO_cyWcoeo4zpIp0mXG-7f_RWKzXp1g8xoCXuMQAvD_BwE",
//         categoria:"camisetas",
//          talla:"S",
//          precio:4.50 },
       
//   ];

console.log(Product);

router.get("/products",(req,res)=>{//Ruta Read products me permite ver todos los productos
    res.send(Product)//Utilizo res.json (products porqué debería enviarme un archivo de objetos de productos)
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

//como lo verifico?




//Ruta Post dashboard
router.post("/dashboard",async (req,res)=>{
    try{
        const product= await Product.create({...req.body})
    res.status(201).json(product)
    } catch (error){console.log(error)}
})

router.get("/dashboard",(req,res)=>{
    res.send(Product)
})





//GET /dashboard/new
router.get("/dashboard/new", (req,res)=>{//Ruta Read dashboard/new
const templateform=`<!DOCTYPE html>
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
    
        res.send(templateform)
  
})

module.exports = {router}; //exporto el enrutador importante hay que exportar y importar de la misma forma