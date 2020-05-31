let user = {  // LET protege o valor da variável
    name: 'Alex'
}

user.name = 'Outro nome 1' // Alterando a propriedade de um objeto
user['name'] = 'Outro nome 2'

const prop = 'name'
user[prop] = 'Outro nome 3'

user.lastName = 'Leal' // Criando uma propriedade

delete user.name // Apagando uma propriedade