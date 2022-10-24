//configuração do servidor 
const express = require('express')
const app = express()
const port = process.env.PORT || 4040
app.use(express.json())
app.set('view engine', 'ejs')

//rota padrão p raiz 
app.get('/', (req,res) =>{
    res.render('index.ejs')
})

//upload
app.post('/', (req,res)=>{
    res.send("LOL")
    console.log(req.body,req.file) //apoio a lógica
})

//escuta do servidor
app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})

//res.render - carrega pagina site
//res.send - envia mensagem de texto puro