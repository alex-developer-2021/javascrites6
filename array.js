const users = ['Alex', 'Luana', 'Francisco']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Alex',
        age: 44,
        gender: gender.MAN
    },
    {
        name: 'Luana',
        age: 36,
        gender: gender.WOMAN
    },
    {
        name: 'Francisco',
        age: 71,
        gender: gender.MAN
    }
]

// Retornar a quantidade de itens de um Array
console.log('Itens:', persons.length)

// Verificar se é Array
console.log('A variável persons é um array:', Array.isArray(persons))

// Iterar os itens do Array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
})

//Filtrar Array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)

// Retornar um novo
const personWithcourse = persons.map(person => {
    person.course = 'Introdução ao Javascrfipt'
    return person
})

console.log('\nPessoas com a adição do course:', personWithcourse)

// Transforma um Array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log('\nSoma de idade das pessoas', totalAge)

// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age
                            return age
                        }, 0)

console.log('\nSoma de todas idades das pessoas que possuem idade par', totalEvenAges)