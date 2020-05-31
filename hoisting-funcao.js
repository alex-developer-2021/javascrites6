function fn() {
    log('Hoisting de função')  // Neste hoisting, como é função, ele sobe tudo e por isso executa sem erro.

    function log(value) {
        console.log(value)
    }
}

fn()

/**
 * function fn() {
 *      function log(value) {
 *          console.log(value)
 *      }
 * 
 *      log('Hoisting de função')
 * }
 */