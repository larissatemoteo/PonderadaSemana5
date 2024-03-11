// Definição da classe SomadorDeNotas
class SomadorDeNotas {
    constructor() {
        this.total = 0; // adicionando o atributo 'total' com valor 0
    }

    // Método para adicionar uma nota ao total
    adicionarNota(nota) {
        this.total += nota; // Soma a nota ao atributo total
    }

    // Método para exibir o total das notas adicionadas
    verTotal() {
        console.log(`O total das notas é: ${this.total}`); // Exibe na tela o total das notas
    }
}

// Criando um objeto da classe SomadorDeNotas
let somador = new SomadorDeNotas();

// Adicionando algumas notas ao somador
somador.adicionarNota(7);
somador.adicionarNota(8);
somador.adicionarNota(6);

// Chamando o método verTotal() para exibir o total das notas
somador.verTotal();