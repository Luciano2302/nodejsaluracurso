

import "dotenv/config";
import app from "./src/app.js"


const PORT = 3000;

const rotas = { 
    "/": "Curso de Node JS",
    "/livros" : "Entrei em livros",
    "/autores" : "Entrei em autores"
};

app.listen(PORT, ()=> {
   console.log("Servidor escutando!");
});


