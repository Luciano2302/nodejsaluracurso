import { autor } from "../models/Autor.js";

class AutorController{

    static async listarAutores(req, res){
        try {
          const listarAutores = await autor.find({});
          res.status(200).json(listarAutores);
         }catch (error) {
          res.status(500).json({message: `${error.message} - falha ao cadastrar autor.`})
        }
    }

    static async listarAutorPorId(req, res){
        try {
          const id = req.params.id;  
          const autorEncontrado = await autor.findById(id);
          res.status(200).json({message : "Autor encontrado com sucesso", autor : autorEncontrado});
         }catch (error) {
          res.status(500).json({message: `${error.message} - falha ao buscar autor.`})
        }
    }

    static async cadastrarAutores(req, res){
        try {
            const autorNovo = await autor.create(req.body);
            res.status(201).json({message : "Autor criado com sucesso", autor : autorNovo });
        } catch (error) {
           res.status(500).json({message: `${error.message} - falha ao cadastrar autor.`})
        }
    }

    static async atualizarAutor(req, res){
        try {
          const id = req.params.id;  
          await autor.findByIdAndUpdate(id, req.body);    
          res.status(200).json({message : "Autor atualizado"});
         }catch (error) {
          res.status(500).json({message: `${error.message} - falha na atualização do autor.`})
        }
    }

    static async excluirAutor(req, res){
        try {
          const id = req.params.id;  
          await autor.findByIdAndDelete(id);    
          res.status(200).json({message : "Autor excluído"});
         }catch (error) {
          res.status(500).json({message: `${error.message} - falha ao excluir o autor.`})
        }
    }

};

export default AutorController;
