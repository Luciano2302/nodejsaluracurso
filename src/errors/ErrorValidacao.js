import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErrorValidacao extends RequisicaoIncorreta{
   
  constructor(error){
    const mensagemError = Object.values(error.errors).map(error => error.message).join(";"); 
    super({message: `Os Seguintes erros foram encontrados: - ${mensagemError}`}); 
  }

}

export default ErrorValidacao;