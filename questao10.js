// Definição da classe Funcionário
class Funcionario {
    constructor(nome, idade, salarioBase) {
      //criação dos atributos para a classe 'Funcionário'
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    // Método para calcular o salário do funcionário
    calcularSalario() {
        // Este método será implementado nas classes filhas
        // Por padrão, retorna o salário base do funcionário
        return this.salarioBase;
    }
}

// Definição da classe Professor, que herda de Funcionário
class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        // Chama o construtor da classe pai (Funcionário)
        super(nome, idade, salarioBase);
        //cria atributos específicos da classe Professor
        this.disciplina = disciplina;
        this.horasAula = horasAula;
    }

    // Método para calcular o salário do professor
    calcularSalario() {
        // O salário do professor é calculado multiplicando suas horas de aula pelo valor da hora/aula
        return this.horasAula * this.salarioBase;
    }
}

// Criando de dois objetos do tipo Professor
let professor1 = new Professor("João", 35, 50, "Matemática", 20); // Professor João, 20 horas de aula de Matemática por semana
let professor2 = new Professor("Maria", 40, 60, "História", 15); // Professor Maria, 15 horas de aula de História por semana

// Chamando o método calcularSalario() para cada objeto e mostrando o cálculo no console
console.log(`${professor1.nome} recebe R$${professor1.calcularSalario()} por semana.`);
console.log(`${professor2.nome} recebe R$${professor2.calcularSalario()} por semana.`);