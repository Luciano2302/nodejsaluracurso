import ErrorBase from "./ErrorBase.js";

class RequisicaoIncorreta extends ErrorBase{

  constructor(message = "Um ou mais dados fornecidos estão incorretos", status = 400){
    super(message, status);
  }

}

export default RequisicaoIncorreta;