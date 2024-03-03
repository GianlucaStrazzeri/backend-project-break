const express =require("express"); //requerir express
const app= express()//inicializar express
const PORT = process.env.PORT || 3005; //The process.env property returns an object containing the user environment
const { dbConnection,} = require('./config/db');//requiero la functión desde db.js
const {router} = require('./routes/productRoutes'); //requiero el enrutador desde productRoutes.js

dbConnection();//invoco la función, hay que establecer la conexión antes de nada para que no de problemas luego de conectarse a cada request

app.use(express.json());//Sirve como un middleware para todas las rutas, only parses JSON and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended:true})); //Sirve como un middleware para todas las rutas, only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body .
//{extended:true} sirve para corregir el error body-parser deprecated undefined extended: provide extended option


  
  
  app.use(express.static('public'))//middleware a aplicar a todas las rutas
  app.use('/', router);//Esto me permite utilizar el enrutador al entrar a la pagína principal

  





app.listen(PORT,()=>//Escucho al servidor 
console.log(`Express escuchando en el http:localhost:${PORT}`))


// const ejemplos=[ {},{},{},{},{},{},{},{}]
// const newtemplate=``
// ejemplos.forEach((ejemplo)=>console.log(newtemplate))