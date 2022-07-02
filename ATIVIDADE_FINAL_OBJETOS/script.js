
let nave = {
    nome: "",
    type: "",
    velocity: 0,
    maxVelocity: 0,
    exit: false
}


nave.speedUp = function(){//acelera a nave

    acel = parseInt(prompt("Em quanto você quer acelerar?(light years)"))
    this.velocity += acel
    if (this.velocity > this.maxVelocity) {

        alert("A NAVE ESTÁ ACIMA DA VELOCIDADE PERMITIDA!!!\n\nMétodo de segurança ativado.\n\nReduzindo para velocidade permitida...")
        this.velocity = this.maxVelocity
    }
}


nave.speedDown = function(){//acelera a nave

    desacel = parseInt(prompt("Em quanto você quer desacelerar?(light years)"))

    if (this.velocity >= desacel) {
        this.velocity -= desacel  
    }else{
        alert("Requerimento invalido!!!")
    }    
}



nave.input = function(){//recebe o primeiro input de dados(so e usado uma vez, fiz uma função para caso eu quisesse alterar ou adicionar mais usuarios no futuro)

    this.nome = prompt("Qual o seu nome comandante?")
    this.type = prompt("Qual a classificação da sua nave?")

do {
    this.maxVelocity = parseInt(prompt("Até que velocidade podemos viajar?(light years)"))

} while (this.maxVelocity < 1 );




}



nave.turn = function(){//Toma a decisão do que fazer

    select = parseInt(prompt("Bem vindo ao computador de bordo!\n\nSua Velocidade atual é de " + this.velocity + " anos-luz.\n\nDigite:\n1-Acelerar a nave.\n2-Desacelerar a nave.\n3-Parar a nave. "))

    
    switch (select) {
        case 1:

            this.speedUp()
            break;
        case 2:

            this.speedDown()
            break;
        case 3:

            if (confirm("Tem certeza?") == true) {this.exit = true}
            alert("A nave de classe " + this.type + " no controle do comandante " + this.nome + " pede permissão para pouso emergencial na andromeda!")
            alert("Aqui é o responsável pela base de andromeda.\n\nPermissão para pouso concedida.")
            alert("Pousando...")
            alert("Espero que tenha gostado do passeio :)")
            break;
        default:

            alert("Entrada invalida!!!")
            break;
    }
}


//APLICATIVO



nave.input()

while (nave.exit == false) { // É o menu do app

    nave.turn()
    
}



// melhorar requerimento
// qd passar desacelerar sozinho





// let nave = {
//     nome:"demeter",
//     type:"extraction",
//     maxCrew: 20,
//     turnOn: function(){
//         alert("Preparando propulsão")
//         alert("Ligando computador de bordo")
//         console.log(this.name)
//     }

// }

// nave.velocity = 0
// nave.speedUp = function(acel){

//     this.velocity += acel 

// }

// console.log(nave)
// nave.speedUp(10)
// console.log(nave)