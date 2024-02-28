//Crear conexión a la base de datos de mongo
require("dotenv").config();

const mongoose =require("mongoose");


const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);//con process.env le enviamo lo que tenemos dentro del doc .env
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};


module.exports={dbConnection};