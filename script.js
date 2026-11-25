// 1
const periferico = [
    'Teclado', 'Mouse', 'Marmelada', 'Placa de Vídeo', 'Controle PS3'
]
periferico[2] = 'Webcam Full HD';

for (let counter = 0; counter < 5; counter = counter + 1) {
    console.log(`Posição ${counter}: ${periferico[counter]}`);
}


// 2
const computador = {
    patrimonio: 'TI-001',
    processador: 'Core i3/i5/i7/i9',
    memoriaRAM: 64,
    emManutencao: true
}

console.log(`O computador de patrimônio ${computador.patrimonio} possui processador ${computador.processador} e ${computador.memoriaRAM} GB de RAM. Manutenção: ${computador.emManutencao}`);


// 3
const carrinho = [
    {
    nome: 'Mouse',
    preco: 42,
    quantidade: 3
    },
    {
    nome: 'Pêra',
    preco: 56,
    quantidade: 4
    },
    {
        nome: 'PC Gamer',
        preco: 76,
        quantidade: 9
    },
    {
        nome: 'Farelo de Bolacha',
        preco: 32,
        quantidade: 2
    }
]

let valorTotal = 0;

for (let counter = 0; counter < 4; counter = counter + 1) {
    valorTotal = valorTotal + carrinho[counter].preco * carrinho[counter].quantidade;
}
console.log(valorTotal);


// 4
const usuario = {
    nome: 'Diduliuson',
    cargo: 'Repositor',
    permissoes: [
        'Limpeza', 'Estoque', 'Trabalhar', 'Compra com 10% de desconto'
    ]
}

console.log(`Olá, ${usuario.nome} do cargo ${usuario.cargo}!`);

for (let counter = 0; counter < 4; counter = counter + 1) {
    console.log('-Acesso Liberado:', usuario.permissoes[counter]);
    if (usuario.permissoes[counter] === 'admin') {
        console.log('Atenção: Usuário com privilégios totais!');
    }
}


// 5
const chamados = [
    {
        id: 1,
        cliente: 'Filedarilton',
        resolvido: true,
        historico: [
            'Chamado aberto', 'Técnico atribuído', 'Cheque extraído'
        ]
    },
    {
        id: 2,
        cliente: 'Gertrudes',
        resolvido: true,
        historico: [
            'Chamado Expirado', 'Técnico incompleto', 'Devendo'
        ]
    },
    {
        id: 1,
        cliente: 'Hélio Silva',
        resolvido: false,
        historico: [
            'Chamado não requisitado', 'Cursando', 'Cheque reprovado'
        ]
    }
]

for (let counter = 0; counter < 3; counter = counter + 1) {
    if (chamados[counter].resolvido === true) {
        console.log(`ID: ${chamados[counter].id}, Nome: ${chamados[counter].cliente}, Mensagens:`);
        for (let i = 0; i < 3; i = i + 1) {
            console.log(chamados[counter].historico[i]);
        }
    }
}