// let resposta = ''
// let conta = 0

// console.log(`Você entra em um bar come uma coxinha por R$2,50`);
// while (resposta != 'N') {
//     conta++
//     console.log(`Você já comeu ${conta} coxinhas`);
//     resposta = prompt('Você comer mais uma coxinha? (S ou N)').toUpperCase();
// }
// console.log(`Seu total a pagar é R$${conta*2.5}`);




let conta2 = 0
let resposta2 = prompt('Você comer uma coxinha? (S ou N)').toUpperCase();
while (resposta2 != 'N'){
    conta2+= 2.5
    console.log(`Você já deve R$${conta2}`);
    resposta2 = prompt('Você comer MAIS uma coxinha? (S ou N)').toUpperCase();
}
console.log(`Seu total a pagar é R$${conta2}`);