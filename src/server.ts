import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRouter from "./routes/index"

dotenv.config();
// Carrega as variáveis de ambiente do arquivo .env para process.env

const server = express();

server.set('view-engine', 'mustache');
// Define o Mustache como mecanismo de visualização (view engine)

server.set('views', path.join(__dirname, 'views'));
// Define a pasta onde estão os arquivos de views (templates HTML)

server.engine('mustache', mustache());
// Registra o mecanismo de template Mustache com o Express

server.use(express.static(path.join(__dirname, '../public')));
// Configura o servidor para servir arquivos estáticos (CSS, imagens, JS) da pasta 'public'

server.use(mainRouter);

server.use((req, res) => {
   res.send("Página não encontrada!");
});

server.listen(process.env.PORT);
// Inicia o servidor na porta definida no arquivo .env (ex: PORT=3000)