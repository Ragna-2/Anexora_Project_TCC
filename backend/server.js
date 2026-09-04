const mysql = require ("mysql2");

const express =
require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com MySQL
const db =
mysql.createConnection({
   host: "localhost",
   user: "root",
   database: "terrafertil",
   port: 3306
});

// Testar conexão
db.connect((err) => {
    if (err) {
         console.log("Erro ao conectar o MySQL:");
         console.log(err);
         return;
    }

    console.log("MySQL conectado com sucesso!");

});

// Rota inicial
app.get("/",(req, res) => {
   res.send("Servidor funcionamento!");
});

// Inicial servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});