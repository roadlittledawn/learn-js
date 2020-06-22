function fib(n) {
    if (n === 0 || n === 1) {
        return n
    }
    return fib(n -1) + fib(n - 2)
}

// IIFE to automatically execute
(() => {
    for (let i = 0; i < 20; i++) {
        console.log(fib(i))
    }
})()