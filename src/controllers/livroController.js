import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res){
      try {
        const listarLivros = await livro.find({});
        res.status(200).json(listarLivros);
       }catch (error) {
        res.status(500).json({message: `${erro.message} - falha ao cadastrar livro.`})
      }
    }

    static async listarLivroPorId(req, res){
        try {
          const id = req.params.id;  
          const livroEncontrado = await livro.findById(id);
          res.status(200).json({message : "Livro encontrado com sucesso", livro : livroEncontrado});
         }catch (error) {
          res.status(500).json({message: `${erro.message} - falha ao buscar livro.`})
        }
    }

    static async cadastrarLivros(req, res){
        try {
            const livroNovo = await livro.create(req.body);
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
          res.status(500).json({message: `${erro.message} - falha na atualização do livro.`})
        }
    }

    static async excluirLivro(req, res){
        try {
          const id = req.params.id;  
          await livro.findByIdAndDelete(id);    
          res.status(200).json({message : "Livro excluído"});
         }catch (error) {
          res.status(500).json({message: `${erro.message} - falha ao excluir o livro.`})
        }
    }

};

export default LivroController;