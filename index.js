require('colors');

const fetch = require('node-fetch');

let nick = 'Nickname desejado aqui!';
    replaced = nick.replace(/\s/g, '%20');

    callNickname(replaced);

    async function callNickname(replaced) {
        fetch(`https://lols.gg/pt/name/checker/br/${replaced}/`, { method: 'GET' })
        .then(function (response) {
            switch (response.status) {
                case 200:
                    return response.text();
                case 404:
                    throw response;
            }
        })
        .then(function (disponibilidade) {
            if(!disponibilidade.includes('disponível em ') || !disponibilidade.includes('está disponível!')) {
                return console.log(`Ocorreu um erro ao verificar o nick, tente novamente.`.brightRed);
            }
            if(disponibilidade.includes('disponível em ')) {
                disponibilidade = disponibilidade.split('disponível em ')[1];
                disponibilidade = disponibilidade.split(' dias')[0];

            return console.log(`O apelido ` + `${nick}`.brightRed + ` estará disponível em ` + `${disponibilidade}`.brightRed + ` dias!`);
            };
            if(disponibilidade.includes('está disponível!')) {
                return console.log(`O apelido ` + `${nick}`.brightGreen + ` está disponível!`)
            };
        })
        .catch(function (response) {
            console.log(response.statusText);
        });
    };
