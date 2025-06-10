
// 1. criar uma lista
let nomes = ["Ana", "Bia", "Carlos", "Daniel", "Eduardo"];
let carros = []; 
let cidadesArgentina = ['Buenas Aires', 'Córdoba', 'Rosário', 'La Plata']; 

//retorna o número com a quantidade de itens da lista (.length)
console.log(`Tamanho: ${cidadesArgentina.length}`); 

// 2. limpar ([])
console.log(nomes);
nomes = []

// 3. adicionar elementos (.push)
carros.push('Fusca', 'Ford', 'BMW');
console.log(carros);


// 4. remover elementos (.pop e .shift)
console.log(nomes);
nomes.pop(); //ultimo
console.log(nomes);
nomes.shift(); //primeiro
console.log(nomes);


// 5. filtrar elementos
let nomeProprio = `Meu nome é ${nomes[1]} ${nomes[2]}`
console.log(nomeProprio.toLocaleUpperCase()) //escrever o texto em maiusculo 

// 6. percorrer os itens (.forEach)
let furtas = ['uva', 'banana', 'maça', 'abacate', 'melão']; 
furtas.forEach(function (fruta) {
    console.log(fruta);    
}    
)