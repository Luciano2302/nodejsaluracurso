import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static async listarLivros(req, res){
      try {
        const listarLivros = await livro.find({});
        res.status(200).json(listarLivros);
       }catch (error) {
        res.status(500).json({message: `${error.message} - falha ao cadastrar livro.`})
      }
    }

    static async listarLivroPorId(req, res){
        try {
          const id = req.params.id;  
          const livroEncontrado = await livro.findById(id);
          res.status(200).json({message : "Livro encontrado com sucesso", livro : livroEncontrado});
         }catch (error) {
          res.status(500).json({message: `${error.message} - falha ao buscar livro.`})
        }
    }

    static async cadastrarLivros(req, res){
      const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const novoLivroCompleto = { ...novoLivro, autor : { ...autorEncontrado._doc}}
            console.log(novoLivroCompleto);
            const livroNovo = await livro.create(novoLivroCompleto);
            res.status(201).json({message : "Criado com sucesso", livro : livroNovo });
        } catch (error) {
           res.status(500).json({message: `${error.message} - falha ao cadastrar livro.`})
        }
    }

    static async atualizarLivro(req, res){
        try {
          const id = req.params.id;  
          await livro.findByIdAndUpdate(id, req.body);    
          res.status(200).json({message : "Livro atualizado"});
         }catch (error) {
          res.status(500).json({message: `${error.message} - falha na atualização do livro.`})
        }
    }

    static async excluirLivro(req, res){
        try {
          const id = req.params.id;  
          await livro.findByIdAndDelete(id);    
          res.status(200).json({message : "Livro excluído"});
         }catch (error) {
          res.status(500).json({message: `${error.message} - falha ao excluir o livro.`})
        }
    }

    static async listarLivrosPorEditora(req, res){
      const editora = req.query.editora;
      try {
        const livrosPorEditora = await livro.find({editora: editora});
        res.status(200).json(livrosPorEditora);
       }catch (error) {
        res.status(500).json({message: `${error.message} - falha na busca.`})
      }
  }

};

export default LivroController;