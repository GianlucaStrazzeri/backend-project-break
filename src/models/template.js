const templateform=`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Dashboard</title>
    <link rel="stylesheet" href="../public/styles.css">
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
                <select name="categoria">
                    <option value="Zapatos"> Zapatos</option>
                    <option value="Camisetas"> Camisetas</option>
                    <option value="Pantalones" selected> Pantalones</option>
                    <option value="Accessorios"> Accessorios</option>
                  </select>
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

module.exports = {templateform}