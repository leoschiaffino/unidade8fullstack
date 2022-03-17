//data do evento
var diaEvento = 12
var mesEvento = 03
var anoEvento = 2022

//data atual
let diaAtual = 17
let mesAtual = 03
let anoAtual = 2022

//validação por data
if(diaEvento>=diaAtual){
    if(mesEvento>=mesAtual){
        if(anoEvento>=anoAtual){
            console.log("Cadastro permitido")
        }else{
            console.log("Cadastro não permitido por data inválida")
        }
    }else{
        console.log("Cadastro não permitido por data inválida")
    }
}else{
    console.log("Cadastro não permitido por data inválida")
}

let idade = 18

//validação por idade
if(idade>=18){
    console.log("Cadastro permitido")
}else{
    console.log("Cadastro não permitido pela idade")
}

//validação por participantes
let participantes = ["José", "Bruno", "Lucas", "Leonardo", "Nicole"]
if (participantes.length < 100){
    console.log("Cadastro permitido")
}else{
    console.log("Cadastro não permitido. Limite de participantes excedido")
}