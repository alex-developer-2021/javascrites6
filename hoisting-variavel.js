function fn() {
    console.log(text) // Nesse console será apresentado pelo Javascript o resultado INDEFINED, pois a veriável não foi definida ainda.

    var text = 'Exemplo'

    console.log(text) // Já aqui retorna EXEMPLO por que está após a variável ser declarada.
}

fn()

/**
 * function int() {
 *      var text
 *      console.log(text)
 * 
 *      text = 'Exemplo'
 * 
 *      console.log(text) 
 * }
 */