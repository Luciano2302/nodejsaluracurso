class ErrorBase extends Error{
  
  constructor(mensagem = "Error interno do servidor", status = 500){
    super();
    this.message = mensagem;
    this.status = status;
  }

  enviarResposta(res){
    res.status(this.status).send({message: this.message, status: this.status});
  }
}

export default ErrorBase;