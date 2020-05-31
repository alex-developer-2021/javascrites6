const textSize = 'Texto'.length // Retorna o tamanho de uma STRING
console.log(`Quanntidade de letras: ${textSize}`)

const splittedText = 'Texto'.split('x') // Retorna um Array quebrando a String por um delimitador
console.log('\nArray com as posições separadas pelo delimitador:', splittedText)

const replacedText = 'Texto'.replace('Text','txeT') // Busca por um valor e retorna outro
console.log('\nSubstituição de valor:', replacedText)

const lastChar = 'Texto'.slice(-1) // Retorna a "fatia" de um valor
console.log('\nÚltima letra de uma String:', lastChar)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log('\nValor da String da primeira letra menos a última:', allWithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da String da segunda letra até a última:', secondToEnd)

const twoCharBeforeTheFisrtPos = 'Texto'.substr(0,2)
console.log('\nAs duas primeiras letras da String:', twoCharBeforeTheFisrtPos)
