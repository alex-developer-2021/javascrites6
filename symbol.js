const symbol1 = Symbol()
const sumbol2 = Symbol()

console.log('symbol1 é igual a symbol2:', symbol1 === symbol2) // Symbols são únicos

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Alex',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Leal'
}

console.log(user)

// Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}

console.log('Propriedades do objeto user:', Object.keys(user))
console.log('Valores das propriedades do objeto user:', Object.values(user))

// Exibir symbols de um object
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user))

// Acessando todas as propriedades do objeto
console.log('Todas proprieddes do objeto user:', Reflect.ownKeys(user))

// Criar um enum
const directions = {
    UP: Symbol('UP')
    DOWN: Symbol('DOWN')
    LEFT: Symbol('LEFT')
    RIGHT: Symbol('RIGHT')
}