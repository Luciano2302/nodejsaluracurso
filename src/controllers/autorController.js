import NaoEncontrado from "../errors/NaoEncontrado.js";
import { autor } from "../models/Autor.js";

class AutorController{

  static async listarAutores(req, res, next){
    try {
      const listarAutores = await autor.find({});
      if(listarAutores !== null) {
        res.status(200).json(listarAutores);
      }else{
        next(new NaoEncontrado( "Sem autores cadastrados na base de dados."));
      }
    }catch (error){
      next(error);
    }
  }

  static async listarAutorPorId(req, res, next){
    try {
      const id = req.params.id;  
      const autorEncontrado = await autor.findById(id);
      if(autorEncontrado !== null) {
        res.status(200).json({message : "Autor encontrado com sucesso", autor : autorEncontrado});
      }else{
        next(new NaoEncontrado( "Id do autor não localizado."));
      }
    }catch (error) {
      next(error);
    }
  }

  static async cadastrarAutores(req, res, next){
    try {
      const autorNovo = await autor.create(req.body);
      res.status(201).json({message : "Autor criado com sucesso", autor : autorNovo });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next){
    try {
      const id = req.params.id;  
      const autorResultado = await autor.findByIdAndUpdate(id, req.body); 
      if(autorResultado != null){
        res.status(200).json({message : "Autor atualizado"});
      }else{
        next(new NaoEncontrado("Id não encontrado"));
      }
    }catch (error) {
      next(error);
    }
  }

  static async excluirAutor(req, res, next){
    try {
      const id = req.params.id;  
      const autorResultado = await autor.findByIdAndDelete(id);
      if(autorResultado != null){
        res.status(200).json({message : "Autor excluído"});
      }else{
        next(new NaoEncontrado("Autor não deletado id não corresponde!"));
      }   
    }catch (error) {
      next(error);
    }
  }
}

export default AutorController;
