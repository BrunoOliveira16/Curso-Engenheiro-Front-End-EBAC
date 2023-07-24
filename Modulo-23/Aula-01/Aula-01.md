## 📝 Aula 01: Introdução
A internet é uma gigantesca rede de computadores que se comunicam juntos. Basicamente, a internet funciona como uma troca de dados entre um aparelho (computador, celular, tablet) e servidores (computadores que armazenam os conteúdos disponíveis online). A internet é uma vasta e espalhada coleção de redes que se conectam umas às outras.

### URL
Uma URL (Uniform Resource Locator) é um endereço que especifica a localização de um recurso na internet. A URL é composta por várias partes, incluindo o protocolo (por exemplo, http ou https), o nome do host (por exemplo, www.exemplo.com) e o caminho para o recurso (por exemplo, /pagina.html).

A ``base URL`` é a parte da URL que inclui o protocolo e o nome do host. Por exemplo, na URL ``https://www.exemplo.com/pagina.html``, a ``base URL`` é ``https://www.exemplo.com``.

Os parâmetros de consulta são pares de chave-valor que são adicionados à URL após um ponto de interrogação ``?``. Eles são usados para enviar informações adicionais ao servidor. Por exemplo, na URL ``https://www.exemplo.com/busca?q=exemplo``, o parâmetro de consulta é ``q=exemplo``, onde ``q`` é a chave e exemplo é o valor. Os parâmetros de consulta são separados por um ``&`` quando há mais de um. Por exemplo, na URL ``https://www.exemplo.com/busca?q=exemplo&pagina=2``, há dois parâmetros de consulta: ``q=exemplo`` e ``pagina=2``.

<br>

### HTTP
HTTP (Hypertext Transfer Protocol) é um protocolo de camada de aplicação para transmissão de documentos hipermídia, como o HTML. Foi desenvolvido para comunicação entre navegadores web e servidores web, porém pode ser utilizado para outros propósitos também.

Um endpoint é um termo que pode ser aplicado a diferentes contextos. Em protocolos de comunicação, por exemplo, o endpoint faz referência aos terminais de conexão entre uma API e o cliente. É, por exemplo, a URL de acesso a um determinado serviço, que pode ou não ser criado através da API. Um endpoint de um web service é a URL onde seu serviço pode ser acessado por uma aplicação cliente.

Os principais métodos HTTP são: GET, POST, PUT, DELETE, HEAD, OPTIONS, CONNECT, TRACE e PATCH.
- ``GET``: O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados2.

- ``POST``: O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor2.

- ``PUT``: O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição2.

- ``DELETE``: O método DELETE remove um recurso específico2.

- ``HEAD``: O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta2.

- ``OPTIONS``: O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino2.

- ``CONNECT``: O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino2.

- ``TRACE``: O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino2.

- ``PATCH``: O método PATCH é utilizado para aplicar modificações parciais em um recurso2.

<br>

### Respostas HTTP
Uma resposta HTTP é composta por três partes: o código de status, os cabeçalhos e o corpo.

- O código de status é um número de três dígitos que indica se a requisição foi bem-sucedida ou não. Os códigos de status das respostas HTTP são agrupados em cinco classes: Respostas de informação (100 - 199), Respostas de sucesso (200 - 299), Redirecionamentos (300 - 399), Erros do cliente (400 - 499) e Erros do servidor (500 - 599).

- Os cabeçalhos contêm informações adicionais sobre a resposta, como o tipo de conteúdo retornado e a data em que a resposta foi gerada.

- O corpo da resposta contém os dados retornados pelo servidor. O conteúdo do corpo varia de acordo com o tipo de requisição e o código de status retornado. Por exemplo, em uma requisição GET bem-sucedida, o corpo da resposta conterá a representação do recurso solicitado.

#### código de status
O código de status é um número de três dígitos que indica se a requisição foi bem-sucedida ou não. Os códigos de status das respostas HTTP são agrupados em cinco classes: Respostas de informação (100 - 199), Respostas de sucesso (200 - 299), Redirecionamentos (300 - 399), Erros do cliente (400 - 499) e Erros do servidor (500 - 599).

Alguns exemplos de códigos de status comuns incluem:
- ``200 OK``: A requisição foi bem-sucedida e o servidor retornou o recurso solicitado.

- ``201 Created``: A requisição foi bem-sucedida e um novo recurso foi criado como resultado.

- ``204 No Content``: A requisição foi bem-sucedida, mas não há conteúdo para retornar.

- ``400 Bad Request``: A requisição foi malformada ou inválida.

- ``401 Unauthorized``: A autenticação é necessária para acessar o recurso solicitado.

- ``403 Forbidden``: O servidor entendeu a requisição, mas se recusa a atendê-la.

- ``404 Not Found``: O recurso solicitado não foi encontrado no servidor.

- ``500 Internal Server Error``: Ocorreu um erro interno no servidor ao tentar processar a requisição.

Esses são apenas alguns exemplos dos muitos códigos de status disponíveis. Cada código tem um significado específico e pode ser usado para transmitir informações sobre o resultado da requisição.

#### cabeçalhos HTTP
Um cabeçalho HTTP é um campo de uma requisição ou resposta HTTP que passa informações adicionais, alterando ou melhorando a precisão da semântica da mensagem ou do corpo. Cabeçalhos são case-insensitive, iniciam-se no começo da linha e são seguidos imediatamente por um ‘:’ e um valor dependendo do cabeçalho em si.

Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP. Um cabeçalho de solicitação é composto por seu nome case-insensitive (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ‘:’ e pelo seu valor (sem quebras de linha). Espaços em branco antes do valor serão ignorados.

#### body
O corpo da resposta contém os dados retornados pelo servidor em resposta a uma requisição. O conteúdo do corpo varia de acordo com o tipo de requisição e o código de status retornado.

Por exemplo, em uma requisição GET bem-sucedida, o corpo da resposta conterá a representação do recurso solicitado. Em uma requisição POST bem-sucedida, o corpo da resposta pode conter informações sobre o resultado da ação realizada pelo servidor.

O formato dos dados no corpo da resposta também pode variar. Os dados podem ser retornados em diferentes formatos, como HTML, JSON ou XML, dependendo do tipo de recurso solicitado e dos cabeçalhos enviados na requisição.

Os cabeçalhos da resposta podem conter informações adicionais sobre o corpo da resposta, como o tipo de conteúdo retornado e o tamanho dos dados. Por exemplo, o cabeçalho ``Content-Type`` indica o tipo de mídia dos dados no corpo da resposta, enquanto o cabeçalho ``Content-Length`` indica o tamanho dos dados em bytes.

<br>

### JSON
JSON (JavaScript Object Notation) é um formato leve de troca de dados. É fácil para humanos ler e escrever e fácil para máquinas analisar e gerar. É baseado em um subconjunto da linguagem de programação JavaScript, mas é independente de linguagem e pode ser usado com muitas outras linguagens de programação.

O formato JSON é utilizado para estruturar dados em formato de texto e permitir a troca de dados entre aplicações de forma simples, leve e rápida. Ele é comumente usado para transmitir dados entre um servidor e uma aplicação web, como uma forma de enviar dados do servidor para o navegador web do usuário.

JSON é construído em duas estruturas: uma coleção de pares nome/valor (como um objeto em JavaScript) e uma lista ordenada de valores (como uma matriz em JavaScript). Essas estruturas são universais e suportadas pela maioria das linguagens de programação modernas, o que torna o JSON um formato ideal para troca de dados.

<br>

### API
API é a sigla para Application Programming Interface, ou Interface de Programação de Aplicações em português. É um conjunto de regras e protocolos que permite que diferentes aplicações se comuniquem entre si. Ela atua como uma camada intermediária que processa transferências de dados entre sistemas, permitindo que as empresas abram seus dados e funcionalidades de aplicativos para desenvolvedores externos, parceiros de negócios e departamentos internos dentro de suas empresas.

As APIs simplificam o desenvolvimento de software e a inovação, permitindo que as aplicações troquem dados e funcionalidades de maneira fácil e segura. Elas ajudam as empresas a conectar as muitas aplicações diferentes que usam nas operações do dia-a-dia, economizando tempo para os funcionários e eliminando silos que impedem a colaboração e a inovação.

Um exemplo comum do uso de APIs é o processamento de pagamentos por terceiros. Quando um usuário compra um produto em um site de comércio eletrônico, ele pode ser solicitado a “Pagar com Paypal” ou outro tipo de sistema de terceiros. Essa função depende de APIs para fazer a conexão. Quando o comprador clica no botão de pagamento, uma API faz uma chamada para recuperar informações. Essa chamada é processada de um aplicativo para o servidor web via URI da API e inclui um verbo de solicitação, cabeçalhos e, às vezes, um corpo de solicitação. Depois de receber uma solicitação válida da página do produto, a API faz uma chamada para o programa externo ou servidor web, neste caso, o sistema de pagamento de terceiros. O servidor envia uma resposta para a API com as informações solicitadas. A API transfere os dados para o aplicativo inicial solicitante, neste caso, o site do produto.

#### REST
REST (Representational State Transfer) é um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de serviços web, denominados Web services RESTful. Esses serviços fornecem interoperabilidade entre sistemas de computadores na Internet e permitem que os sistemas solicitantes acessem e manipulem representações textuais de recursos da web usando um conjunto uniforme e predefinido de operações sem estado.

REST foi criado em 2000 por Roy Fielding em sua tese de doutorado, na qual ele descreveu um design de arquitetura de software construído para servir aplicações em rede. O modelo REST representa uma possibilidade para a criação de web services, cujas principais diferenças em relação ao modelo tradicional (SOAP) estão na utilização semântica dos métodos HTTP (GET, POST, PUT e DELETE), na leveza dos pacotes de dados transmitidos na rede e na simplicidade, fazendo desnecessária a criação de camadas intermediárias para encapsular os dados.

O objetivo do REST é simplificar o desenvolvimento e a integração de aplicações, permitindo que diferentes sistemas se comuniquem diretamente usando os princípios e protocolos existentes da web sem a necessidade de SOAP ou outro protocolo sofisticado. Isso permite que as empresas integrem facilmente diferentes aplicações e plataformas, economizando tempo e melhorando a colaboração.

<br>

Alguns exemplos de URLs que usam os métodos GET, POST e DELETE de acordo com as boas práticas RESTful:
- GET: ``https://api.exemplo.com/usuarios/123`` - Este é um exemplo de uma URL que usa o método GET para recuperar informações sobre o usuário com o ID 123. A URL segue uma estrutura clara e lógica, com o recurso (usuários) seguido pelo identificador do recurso específico (123).

- POST: ``https://api.exemplo.com/usuarios`` - Este é um exemplo de uma URL que usa o método POST para criar um novo usuário. A URL especifica o recurso (usuários) que está sendo criado, mas não inclui um identificador, pois o novo usuário ainda não foi criado.

- DELETE: ``https://api.exemplo.com/usuarios/123`` - Este é um exemplo de uma URL que usa o método DELETE para excluir o usuário com o ID 123. A URL segue a mesma estrutura clara e lógica do exemplo GET, especificando o recurso (usuários) e o identificador do recurso específico (123).

<br>

Agora, aqui estão alguns exemplos de URLs que não seguem as boas práticas RESTful:
- GET: ``https://api.exemplo.com/getUsuario?ID=123`` - Este é um exemplo de uma URL que não segue as boas práticas RESTful. Em vez de usar uma estrutura clara e lógica para especificar o recurso e o identificador, a URL usa um parâmetro de consulta para passar o ID do usuário. Além disso, a URL inclui a ação (getUsuario) como parte da URL, em vez de usar o método HTTP apropriado (GET).

- POST: ``https://api.exemplo.com/criarUsuario`` - Este é um exemplo de uma URL que não segue as boas práticas RESTful. Em vez de especificar o recurso (usuários) que está sendo criado, a URL inclui a ação (criarUsuario) como parte da URL. Isso vai contra as convenções RESTful, que recomendam usar os métodos HTTP para especificar a ação sendo realizada.

- DELETE: ``https://api.exemplo.com/deleteUsuario?ID=123`` - Este é um exemplo de uma URL que não segue as boas práticas RESTful. Assim como no exemplo GET acima, a URL usa um parâmetro de consulta para passar o ID do usuário e inclui a ação (deleteUsuario) como parte da URL, em vez de usar o método HTTP apropriado (DELETE).

<br>

## ✅ Questionário
Qual das opções a seguir não é um método HTTP válido?

A- POST;

B- GET;

C- PATCH;

D- REMOVE;

Reposta: Letra D - REMOVE não é um método HTTP válido. Os métodos HTTP válidos são: GET, POST, PUT, DELETE, HEAD, OPTIONS, CONNECT, TRACE e PATCH.