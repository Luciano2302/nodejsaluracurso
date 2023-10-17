import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipaluadorErrors from "./middlewares/manipuladorDeErros.js";
import manipaluador404 from "./middlewares/manipaluador404.js";

const conexao = await connectDatabase();

conexao.on("error",(erro) => {
  console.error("Erro de conexão",erro);
});

conexao.once("open",() => {
  console.log("Conexao com o banco feita com sucesso!");
});

const app = express();
routes(app);

app.use(manipaluador404);
app.use(manipaluadorErrors);

export default app;