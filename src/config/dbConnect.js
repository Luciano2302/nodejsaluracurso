import mongoose, {mongo} from "mongoose";

async function connectDatabase(){
  try {
    const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
    const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`;
    
    await mongoose.connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
      
  return mongoose.connection;
}


export default connectDatabase;
