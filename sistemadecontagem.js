//contador de 0 a 10
for (let contador=0;contador<=10;contador++){
//codigo que será repetido  
    console.log(contador)

    if(contador==8){
        console.log("Número 8 foi encontrado")
    }else{
        console.log("Não é o número 8")
    }
}
//estrutura para verificar quais números de 0 a 20 são pares e impares
let numeros=20

for(let contador =0; contador <= numeros; contador++){
    //mod é o resto da divisão
    if(contador%2==0){
        console.log(contador+" é PAR")
    }else{
        console.log(contador+" é IMPAR")
    }
}

//array com contador
let nomes = ["Carlos", "Ronaldo", "Odirley", "Cinthia"]

for(let contador=0;contador<=3;contador++){
    console.log(nomes[contador])
}