const express =require("express"); //requerir express
const app= express()//inicializar express
const PORT = process.env.PORT || 3005; //The process.env property returns an object containing the user environment
const { dbConnection,} = require('./config/db');//requiero la functión desde db.js
const {router} = require('./routes/productRoutes'); //requiero el enrutador desde productRoutes.js

dbConnection();//invoco la función, hay que establecer la conexión antes de nada para que no de problemas luego de conectarse a cada request

app.use(express.json());//Sirve como un middleware para todas las rutas, only parses JSON and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended:true})); //Sirve como un middleware para todas las rutas, only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body .
//{extended:true} sirve para corregir el error body-parser deprecated undefined extended: provide extended option

const options = {
    dotfiles: 'ignore',//Determina cómo se tratan los archivos de puntos (archivos o directorios que comienzan con un punto “.”).
    etag: true,//Habilitar o deshabilitar la generación de etiquetas electrónicas
    extensions: ['htm', 'html'],//Establece extensiones de archivo alternativas: si no se encuentra un archivo, busque archivos con las extensiones especificadas y entregue el primero que encuentre
    index: false, //Envía el archivo de índice del directorio especificado. Sí false deshabilita la indexación de directorios.
    maxAge: '1d',//Set the max-age property of the Cache-Control header in milliseconds or a string in ms (millisecond) format.
    redirect: false, //Redirigir a la ruta final "/" cuando el nombre de la ruta sea un directorio
    setHeaders: function (res, path, stat) {//La modificación de la cabecera tiene que ser SINCRONA
      //Argumentos de  la función cabecera: res es el objeto respuesta, path la ruta de archivo que se envía, stat el statobjeto que se está enviando
        res.set('x-timestamp', Date.now())
    }
  }
  
  app.use(express.static('public', options))//middleware a aplicar a todas las rutas
  app.use('/', router);//Esto me permite utilizar el enrutador al entrar a la pagína principal

  


 
// app.get("/products",(req,res)=>{//Ruta Read products
//     res.send({Products})//Utilizo res.json (products porqué debería enviarme un archivo de objetos de productos)
// }) 

// router.get("/dashboard",(req,res)=>{//Ruta Read dashboard
//     res.send(Products)
//     const nuevoProducto={
//         nombre: req.body.nombre, 
//         descripción:req.body.descripción, 
//         imagen:req.body.imagen,
//         categoria:req.body.categoria, 
//         talla:req.body.talla,
//         precio:req.body.precio 
//     }
//     Products.push(nuevoProducto)
// })

// router.post("/dashboard",(req,res)=>{//Ruta Create dashboard
//     req.send("Añadido nuevo producto")})



app.listen(PORT,()=>//Escucho al servidor 
console.log(`Express escuchando en el http:localhost:${PORT}`))


