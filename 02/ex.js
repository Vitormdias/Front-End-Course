//1
var carro = {
    nome: "Corsa",
    acelera: acelera
};

function acelera(velocidade) {
    return velocidade + 10;
}

//2
//fabrica
var carro  = function (nome , cor) {
    return {
        nome = nome;
        cor = cor;
    }
};

corsa = carro("corsa" , "vermelho");

//construtora
function carro(nome , cor) {
    this.nome = nome;
    this.cor = cor;
}

corsa = new carro("corsa" , "vermelho");

//3
//A função Expression não pode ser chamada antes do código
var x = function () {
    return 'x';
}

x();
//A função Declaration pode ser chamada antes do código
function x() {
    return 'x';
}

x();


//4
// Para na hora em que der um erro saber o nome da função que deu erro

//5
/\d{2}\.\d{3}\.\d{3}\-\d/.test("39.096.123-0")

//6
// O filter retorna um outro array filtrado de acordo com sua lógica

// O map modifica os elementos de um array

//7
// Não porque tem um ';' depois de setIdade
// Pessoa não existe começando com P

// Se arrumados esses erros de compilação, ele retorna o seguinte objeto
{
    idade: 24,
    setIdade: [Function: setIdade]
}


var setIdade = function (idade) {
    this.idade = idade;
}

var pessoa = {
    idade: null,
    setIdade: setIdade;
}

Pessoa.setIdade(24);
console.log(pessoa);
