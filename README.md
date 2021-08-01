# ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage.png?v=1627784292833) Nick Checker - [League of Legends](https://na.leagueoflegends.com/pt-br/) ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage.png?v=1627784292833)
Um script que checa se o apelido de invocador está disponível ou a quantidade de dias para o mesmo ficar disponível ( devido a inatividade do usuário )

### 📁 Sessões
- 📕 [Utilidade](#utils)
- 📚 [Dependências](#dependences)
- 📋 [Introdução](#introduction)
- 💻 [Como usar](#use)
- ⚠ [Nota](#notes)

<a name="utils"></a>
### 📕 Utilidade
O script foi desenvolvido para ajudar os programadores de bots para [Discord](http://discord.com/) ou [WhatsApp](https://www.whatsapp.com/?lang=pt_br) a criarem um comando que faça o trabalho de checar se o nome de invocador está válido ou não, pois há escassez desse tipo de API.

<a name="dependences"></a>
### 📚 Dependências
- [node-fetch](https://www.npmjs.com/package/node-fetch) - Fazer o request no método GET da página que faz o trabalho de checar os apelidos
- [colors](https://www.npmjs.com/package/colors) - Adicionar uma corzinha ao texto do console :D

<a name="introduction"></a>
### 📋 Introdução
Se você está aqui é porque provavelmente já sabe fazer o download de uma NPM, então vamos pular esse passo e ir para o foco do repositório.<br /><br />
O apelido de invocador foi definido como `nick` ( Ex.: Volta Sarah amor ), já o apelido que será usado no request foi definido como `replaced` ( Ex.: Volta%20Sarah%20amor ), assim evitando confusões de minha parte do projeto. O resultado da pesquisa foi definido como `disponibilidade`, e você pode vê-los nas linhas 20, 24 e 30.

<a name="use"></a>
### 💻 Como usar
Defina o apelido que deseja checar na linha 5:
> ```JS
> let nick = 'Nickname desejado aqui!'; // let nick = 'Volta Sarah amor';
Com o apelido definido, basta apenas iniciar o script usando o comando:
> ```BATCH
> node index.js
O resultado será retornado no seu console, e usando os exemplos como base você pode adaptar do modo que desejar o script e encaixar ele em qualquer lugar!

<a name="notes"></a>
### ⚠ NOTA IMPORTANTE - POR FAVOR, LER.
Não tirarei dúvidas ou responderei a perguntas como "**Error: Cannot find module 'node-fetch' como resolvo?**" ou "**Como encaixo esse script no meu projeto?**", pois se você veio aqui é porque sabe o mínimo de JavaScript e como fazer o uso de um script aleatório do GitHub. :P<br /><br />

**"Piadas já foram melhores há mil anos..." ~ Viego**
![Viego](https://images2.alphacoders.com/112/thumb-1920-1124214.jpg)
