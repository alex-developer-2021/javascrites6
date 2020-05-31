const user = {          // Uma variável constante que recebe USER com seus atributos
    name: 'Alex',
    lastName: 'Leal'
}

function getUserWithFullName(user) { // Crio um função para criar um novo atributo nessa variável, sem mudar o conteúdo da CONST
    return {
        ...user,   // Este 3 pontos (...) referem-se ao operador SPREAD que surgiu no ES2018 (ver caderno)
        fullName: `${user.name} ${user.lastName}` // Esta linha é chamada de string literal e tem a mesma função que tivesse escrito
                                                  // fullName: user.name + '  ' + user.lastName
    }
}

const UserWithFullName = getUserWithFullName(user)

console.log(UserWithFullName)