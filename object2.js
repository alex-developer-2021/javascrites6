const user = {
    name: 'Alex',
    lastName: 'Leal'
}

console.log('Propriedade do objeto USER:', Object.keys(user)) // Recuera as chaves do objeto

console.log('\nValores das propriedades do objeto user:', Object.values(user)) // Recupera o valor das chaves do objeto

console.log('\nLista de propriedades e valores do objeto:', Object.entries(user)) // Retorna um Array contendo [nome_prop, valor_prop]

Object.assign(user, {fullName: 'Alex Leal'}) // Mergear propriedades de objetos

console.log('\nAdiciona a propriedade fullName no objeto  user', user)

console.log('\nRetorna um novo objeto mergeando dois ou mais objeto', Object.assign({}, user, {age: 26}))

const newObj = {foo: 'bar'} // Previne todas as alterações em um objeto

Object.freeze(newObj)

newObj.foo = 'changes'

delete newObj.foo

newObj.bar = 'foo'

console.log('\nVariável newObj após as alterações:', newObj)

const person = {name: 'Alex'} // Permite apenas a alteração exsitentes em um objeto

Object.seal(person)

person.name = 'Alex Leal'

delete person.name

person.age = 26

console.log('\nVariável person após as alterações:', person)