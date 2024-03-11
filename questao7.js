class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Este animal é um ${this.nome},ele tem ${this.idade} anos de idade.`);
    }
}

// Criando os objetos "cachorro" e "gato"
let cachorro = new Animal("cachorro", 5);
let gato = new Animal("gato", 3);

// Chamando o método descrever() para cada animal
cachorro.descrever();
gato.descrever();