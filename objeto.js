// 1. Criando um objeto

let pessoa = {
    nome: 'Ana',
    cpf: '00000000000',
    genero: 'F', 
    altura: 1.65,
    dataNascimento: '25/06/1993',
    
    endereco: {
        rua: 1,
        numero: 2,
        bairro: 'Messejana',
        cidade: 'Fortaleza',
        estado: 'Ceará',
    },

    adicionar: function () {
        console.log('Adicionando ...')
    }, 
    
    remover: function () {
        console.log('Removendo...')
    },

    estrangero: false,
    
    contato: {
        telefone: '999999999',
        email: 'ana@ig.com.br',
    }

}

//2. Acessando os dados do objeto (objeto.atributo)
console.log(pessoa.dataNascimento);
console.log(pessoa.endereco);
console.log(pessoa.contato.email);


