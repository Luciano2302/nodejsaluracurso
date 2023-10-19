import {livro} from "../models/index.js";
import {autor} from "../models/index.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

class LivroController {

  static async listarLivros(req, res, next){
    try {
      const listarLivros = await livro.find({});
      if(listarLivros !== null) {
        res.status(200).json(listarLivros);
      }else{
        next(new NaoEncontrado("Sem livros cadastrados na base de dados."));
      }
    }catch (error) {
      next(error);
    }
  }

  static async listarLivroPorId(req, res, next){
    try {
      const id = req.params.id;  
      const livroEncontrado = await livro.findById(id);
      if(livroEncontrado !== null) {
        res.status(200).json({message : "Livro encontrado com sucesso", livro : livroEncontrado});
      }else{
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    }catch (error) {
      next(error);
    }
  }

  static async cadastrarLivros(req, res, next){
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const novoLivroCompleto = { ...novoLivro, autor : { ...autorEncontrado._doc}};
      const livroNovo = await livro.create(novoLivroCompleto);
      res.status(201).json({message : "Criado com sucesso", livro : livroNovo });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next){
    try {
      const id = req.params.id;  
      const livroEncontrado = await livro.findByIdAndUpdate(id, req.body);
      if(livroEncontrado != null){
        res.status(200).json({message : "Livro atualizado"});
      }else{
        next(new NaoEncontrado("Id não encontreado"));
      } 
    }catch (error) {
      next(error);
    }
  }

  static async excluirLivro(req, res, next){
    try {
      const id = req.params.id;  
      const livroEncontrado = await livro.findByIdAndDelete(id);  
      if(livroEncontrado != null){
        res.status(200).json({message : "Livro excluído"});
      }else{
        next(new NaoEncontrado("Livro não deletado, id não encontrado"));
      } 
    
    }catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorEditora(req, res, next){
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({editora: editora});
      res.status(200).json(livrosPorEditora);
    }catch (error) {
      next(error);
    }
  }

}

export default LivroController;