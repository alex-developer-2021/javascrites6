const students = [   //  Array de Alunos com 2 atributos
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
]

function getApprovedStudents(studentsList) {  // Função que retorna apenas alunos aprovados
    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados')
console.log(getApprovedStudents(students))

console.log('\nLista de alunos:')
console.log(students)
