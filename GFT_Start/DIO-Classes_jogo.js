class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){
        if (this.tipo == "guerreiro"){
            return "espada"
        } else if(this.tipo == "mago"){
            return "magia"
        } else if(this.tipo == "monge"){
            return "artes marciais"
        } else if(this.tipo == "ninja"){
            return "shuriken"
        }
    }
}

Mago = new Heroi("Magico", 25, "mago");


console.log("O herói " + Mago.nome + " atacou usando " + Mago.ataque());
