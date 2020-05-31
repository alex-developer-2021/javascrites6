function getName() {
    return 'Alex Leal'
}

function logFn(fn) { // A função logFN recebe uma função como parâmetro
    console.log(fn())
}

const logFnResult = logFn

logFnResult(getName) // Passando a função como parâmetro