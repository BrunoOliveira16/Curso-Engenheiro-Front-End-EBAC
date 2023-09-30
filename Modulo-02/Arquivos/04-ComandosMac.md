# 📌 Comandos para Mac
> Módulo 02: Versionamento de código usando o Git

<br>

## Comandos básicos do terminal
Abra o terminal do MAC, abra o finder, vá em utilitários e depois clique em Terminal:

``ls``: Permite a visualização de arquivos do diretório, sendo pastas ou arquivos que estejam presentes no diretório onde o comando for aplicado. 

``pwd``: Apresenta no terminal o caminho do sistema onde estamos localizados nesse momento.

```mkdir``: Cria uma pasta diretório (lembrando que será criada a pasta no diretório onde estaremos neste momento).

``cd``: Permite a navegação entre pastas (detalhe: temos formas de utilizar o CD, veja a seguir).

``cd nomeDoDiretorio``: Entra no diretório com o nome que você estiver colocando em “nomedodiretorio”. Nota, ele já deve existir previamente para que o comando funcione.

``cd ..``: Colocando dois pontos finais após o cd, ele irá retornar uma pasta anterior. Ou seja, em um caso que estivermos na pasta Desktop e usarmos cd .., iremos retornar para a pasta anterior, a do sistema!

``cd -``: Ao usar esse comando, iremos retornar ao diretório anterior ao que estávamos ao usar o comando cd. Por exemplo: Entramos em uma pasta onde não queríamos estar, mas esquecemos que pasta estávamos antes.

``touch``: Comando utilizado para criar arquivos. Basta usar touch nomedoarquivo.extensão para que possamos gerar um arquivo no sistema. Exemplo: touch nome.txt

``clear``: Limpa o histórico apresentado no terminal.

``nano nomedoarquivo.extensão``: Abrimos o arquivo, principalmente de texto ou parâmetros de configurações, como CSS ou .ini, para editar seu conteúdo com o editor de texto chamado NANO. Com ele, teremos opções extras para a edição do arquivo.
> Nota: temos comandos abaixo. Utilizando a tecla CTRL + alguma tecla, teremos acessos a novos comandos. Veja os principais a seguir.

``CTRL + O``: Salvará o conteúdo editado, perguntando o nome do arquivo que deseja fazer a edição. Aperte ENTER e será salvo no arquivo que estamos editando. Com isso, o editor retorna para as opções anteriores, bastando apesar usar o comando CTRL + X, que sairá do NANO.

``cat``: Apresenta o conteúdo daquele arquivo para a gente sem a necessidade de abrir ou editar o mesmo.

<br>

## Instalando GIT
Aqui, temos de checar a versão do seu sistema operacional para termos a certeza de qual gerenciador de pacotes ter em mãos. 

Clique no ícone da maçã no canto esquerdo superior e clique em “Sobre este Mac”. Uma janela aparecerá, mostrando a versão do seu Mac.

Tendo essa informação em mãos, iremos decidir qual gerenciador de pacotes baixar. 

O git fornece duas opções: O Macports (Para sistemas abaixo do 11, essa é a opção) e o Homebrew (opção para versões 11 para cima).

- Homebrew: https://brew.sh/index_pt-br
- MacPorts: https://www.macports.org/install.php

> Nota: o Homebrew será instalado via Terminal, enquanto o MacPorts será um executável que será baixado pelo site e instalado como um pacote para o sistema.

Tendo quaisquer um dos dois instalados, basta usar o comando abaixo para baixar o Git:

- ``brew install git``: Para Homebrew
- ``sudo port install git``: Para MacPorts

Pode aparecer um erro no terminal e pedir a instalação do xcodebuild:

Caso isso ocorra, instale-o normalmente. Se seu Mac for uma versão mais antiga, deve procurar a versão do Xcode equivalente para realizar o download. 

- Lista de suporte por versão: https://developer.apple.com/pt/support/xcode/
- Lista de download de versões mais antigas: https://idmsa.apple.com/IDMSWebAuth/signin.html?path=%2Fdownload%2Fall%2F%3Fq%3Dxcode&appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&rv=0

Com o git instalado, é imprescindível que seja feito o seguinte comando:
```
git config --global core.editor "nano"
```
Esse comando permite que o editor NANO, utilizado nas aulas, possa ser usado normalmente nos comandos git também!