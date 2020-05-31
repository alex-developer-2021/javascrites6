(() => {
    this.name = 'Arrow function' // Na Arrow Function o THIS aponta para onde foi criado

    const getNameArrowFn = () => this.name

    function getName() {  // Na função o THIS aponta para o OBJETO
        return this.name
    }

    const user = {
        name: 'Nome no ojeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn())
    console.log(user.getName())
})()