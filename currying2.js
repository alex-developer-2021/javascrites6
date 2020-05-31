function soma(a) {              // Na primeira função só recebo parâmetro A
    return function(b) {        // Na segunda só recebo o parâmetro B
        return a + b
    }
}

const soma2 = soma(2) // A constante criada pega o valor da primeira função executada FUNCTION SOMA(A). 
                      // Assim ela guarda o valor que sempre se repetirá.

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))