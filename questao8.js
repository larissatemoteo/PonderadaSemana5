class Animal { //definição da classe animal
    constructor(nome, idade) {
        this.nome = nome; //atributo nome do animal
        this.idade = idade;//atributo idade do animal
    }

    descrever() {
        console.log(`Este é o ${this.nome}, ele tem ${this.idade} anos de idade.`);
    }
}

//definição da classe Gato, que herda de Aniamal
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);//aqui está sendo chamado o construtor da classe pai "Animal"
        this.cor = cor; // já aqui está sendo criado um atributo específico de gatos: cor
    }

    //método específico para gatos é miar
    miar() {
        console.log(`O ${this.nome} está miando: Miau, miau!`);
    }
}

// Criando os objetos "cachorro" e "gato"
let cachorro = new Animal("cachorro", 5);//aqui está sendo criado um objeto da classe Animal
let gato = new Gato("gato", 3, "preto");//aqui está sendo criado um objeto da classe Gato

// Chamando o método descrever() para cada animal
cachorro.descrever();
gato.descrever();

// Chamando o método miar() para o gato
gato.miar();
