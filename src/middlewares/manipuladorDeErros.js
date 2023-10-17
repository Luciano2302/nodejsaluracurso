import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErrorValidacao from "../errors/ErrorValidacao.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipaluadorErrors(error, req, res, next) {
  if(error instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  }else if(error instanceof mongoose.Error.ValidationError){
    new ErrorValidacao(error).enviarResposta(res);
  }else if(error instanceof NaoEncontrado){
    error.enviarResposta(res);
  }else{
    new ErrorBase().enviarResposta(res);
  }
}

export default manipaluadorErrors;