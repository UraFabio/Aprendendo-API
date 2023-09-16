let carros = [
    { 
     Id: 1,
     Modelo: 'Palio',
     Valor: '35000',
     Ano: 2010
    },
    { 
     Id: 2,
     Modelo: 'Fiat',
     Valor: '30000',
     Ano: 2005
    },
    { 
     Id: 3,
     Modelo: 'Gol',
     Valor: '48000',
     Ano: 2020
    }
    ]



const express = require("express")

const app = express()

const port = 3333

app.use(express.json())

app.listen(port, function(){
    console.log("Servidor rodando na porta ",+port)
})

app.get("/carros", (request, response)=>{
    response.send(carros)
})

app.post("/cadastrar",(request, response)=>{
    const resposta = request.body 
    const {id, modelo, valor, ano} = resposta
    
    carros.push(resposta)
    response.send("Cadastrado com sucesso!")
})


app.delete("/deletar", (request, response)=>{
    const id = request.body.id
    let aux = 0
    carros.forEach(obj =>{
        if(obj.Id == id){
            carros.splice(id-1,1)
            response.send("Deletado")
            console.log("Deletado")
            aux ++
        }
    })
    if(aux == 0){
        console.log("Nao encontrado")
        response.send("Nao encontrado")
    }
})
    

app.put("/update",(request, response)=>{
    const {Id, Modelo, Valor, Ano} = request.body
    let aux = 0
    carros.forEach(obj =>{
        if(obj.Id == Id){
            obj.Id = Id
            obj.Modelo = Modelo
            obj.Valor = Valor
            obj.Ano = Ano
            response.send("Atualizado com sucesso!")
            aux ++
        }
    })
    if(aux == 0){
        response.send("Objeto nao encontrado")
    }
})