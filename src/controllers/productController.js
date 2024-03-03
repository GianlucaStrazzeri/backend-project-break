//Poner funciones de controladores separado de rutas
const {Product} =require ("../models/Product")
const {templateform}= require("../models/template.js");

const ProductController={
    async getProduct (req, res)  {
        try {
            const products = await Product.find();//Find es un metodo de mongo que te permite encontrar todos los productos en este caso
            res.send(products);
        } catch (error) {
            console.error(error);
        }
    },

    async getDashboard (req,res){
        try {
            const products = await Product.find();//Find es un metodo de mongo que te permite encontrar todos los productos en este caso
            res.send(products);
        } catch (error) {
            console.error(error);
        }
    },

    async getProductsID (req, res)  {
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
    },

    async getDasboardID(req, res)  {
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
    },


    async  postDasboard (req,res) {
        try{
            const product= await Product.create({...req.body})
        res.status(201).json(product)
        } catch (error){console.log(error)}
    },

    getDasboardNew (req,res){
        res.send(templateform)
        },

        async deleteDashboardID (req,res){
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
            }
}

module.exports= ProductController;