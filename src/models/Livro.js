import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema ({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "O titulo do livro é obrigatório informar."] },
  editora: { type: String, required: [true, "A editora é obrigatória informar."] },
  preco: { type: Number },
  paginas: { type: Number , validate: (valor) => { return valor >= 10 && valor <= 5000; },
    min: [10, "O numero de páginas deve estar entre 10 e 5000"], max: [5000, "O numero de páginas deve estar entre 10 e 5000"]}, 
  autor : { type: autorSchema, required:[true, "O autor é obrigatório infomar."] }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;