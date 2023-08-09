function multiplicar(x: number, y: number): number {
    return x * y
};

function saudar(nome: string): string {
    return `Olá ${nome}`
};


const resultado = multiplicar(5, 5);
const msg = saudar('Bruno');

console.log(resultado);
console.log(msg);