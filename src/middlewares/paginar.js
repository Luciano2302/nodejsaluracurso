import NaoEncontrado from "../errors/NaoEncontrado.js";

async function paginar(req, res, next){
  try {
    let { limite = 2, pagina = 1, ordenacao = "_id:-1"} = req.query; 
    let [campoOrdenacao, ordem] = ordenacao.split(":");
    
    limite  = parseInt(limite);
    pagina  = parseInt(pagina);
    ordem   = parseInt(ordem);

    const resultado = req.resultado;
    
    const listarLivros = await resultado.find({}).skip((pagina - 1) * limite).limit(limite).sort({ [campoOrdenacao]: ordem });
    if(listarLivros !== null) {
      res.status(200).json(listarLivros);
    }else{
      next(new NaoEncontrado("Sem livros cadastrados na base de dados."));
    }
  } catch (error) {
    next(error);
  }
}

export default paginar;