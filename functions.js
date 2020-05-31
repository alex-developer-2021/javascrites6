function fn() {
    return 'Code here'
}

const arrowFn = () => 'Code here' // Se a função só terá um RETURN posso usar =>
const arrowFn2 = () => {
    return 'Code here' // Mais de uma expressão, aí tenho que usar as CHAVES para declarar o Bloco de Função
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

// Receber parâmetros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)

// Receber e retornar funções
const controlFnExec => fnParam => allowed => { // Mando receber o parâmetro FNPRAM, memorizar e depois receber outro parâmetro ALLOWED
    if (allowed) {
        fnParam
    }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) // Executará a função fn
handleFnExecution() // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {  // Este bloc de função é outra forma de escrever o CONST CONTROLFNEXEC acima
    return function(allowed) {
        if (allowed) {
            fnParam()
        }
    }
}