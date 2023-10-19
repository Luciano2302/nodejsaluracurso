class ErrorBase extends Error{
  
  constructor(mensagem = "Error interno do servidor", error, status = 500){
    super();
    this.message = mensagem;
    this.error = error;
    this.status = status;
  }

  enviarResposta(res){
    res.status(this.status).send({message: this.message, status: this.status, error : this.error});
  }
}

export default ErrorBase;