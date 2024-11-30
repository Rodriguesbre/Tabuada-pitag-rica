tabela = document.getElementById('tabela');

// Cria o cabeçalho da tabela
 cabecalho = '<tr><th>x</th>';

for (let i = 1; i <= 10; i++) {

    cabecalho += `<th>${i}</th>`;

}

cabecalho += '</tr>';

tabela.innerHTML += cabecalho;

// Preenche a tabela com os produtos

for ( i = 1; i <= 10; i++) {

    linha = `<tr><th>${i}</th>`;

    for ( j = 1; j <= 10; j++) {

        linha += `<td>${i * j}</td>`;

    }

    linha += '</tr>';

    tabela.innerHTML += linha;

}