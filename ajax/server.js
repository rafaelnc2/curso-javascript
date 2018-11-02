const bodyParser = require("body-parser");
const express = require("express");

const app = express();

//app.use - faz com que intercepte todas as requisições 
app.use(express.static(".")); //Para servir todos os arquivos estáticos da pasta
app.use(bodyParser.urlencoded({extended: true})); //Le os dados enviados através um formulário e transforma em objeto
app.use(bodyParser.json()); //Le os dados enviados como JSON e transforma em objeto

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload'); //pasta de destino
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`); //nome de destino
    }
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
    upload(req, res, err => {
        if( err ){
            return res.end("Ocorreu um erro");
        }

        res.end("Concluído com sucesso!")
;    })
})

app.post("/formulario", (req, res) => {
    res.send({
        ...req.body, //faz um spread com os dados que vem no corpo da requisição
        id: 1
    })
})

app.get("/parOuImpar", (req, res) => {
    //Formas de recuperar os ddos enviados ao servidor
    //req.body
    //req.query (querystring) url.com.br?var1=1&var2=2
    //req.params url.com.br/1
    const par = parseInt(req.query.numero) % 2;
    res.send({
        resultado: par ? "par" : "impar"
    })
})

app.listen(8080, () => console.log("Executando..."));