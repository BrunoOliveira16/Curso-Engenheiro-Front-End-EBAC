# 📌 Boas Práticas
> Módulo 18: Automatize tarefas com Grunt

<br>

## Use Grunt para compilarLESS
> Acompanhe algumas diferenças comuns entre os códigos do Grunt para os ambientes de desenvolvimento e produção.
### ✔ this.async(): 
Usar a função this.async() é importante para garantir que o Grunt aguarde a conclusão de tarefas assíncronas antes de prosseguir para a próxima tarefa ou encerrar a execução. Isso evita que o Grunt termine prematuramente, resultando em comportamento inesperado.

### ✔ Development" (desenvolvimento) e "production" (produção): 
A diferença entre esses ambientes no grunt geralmente envolve ajustes nas configurações e nas tarefas para atender às necessidades específicas de cada ambiente. 

Em um ambiente de desenvolvimento, o objetivo principal é facilitar o processo de desenvolvimento, fornecendo recursos adicionais, como live reloading (atualização automática do navegador), sourcemaps (mapeamento de código-fonte) e compilação rápida para permitir um fluxo de trabalho ágil. Além disso, os arquivos de saída geralmente são mantidos em um formato não minificado, facilitando a leitura e a depuração do código durante o desenvolvimento.

Por outro lado, em um ambiente de produção, o foco principal é otimizar a aplicação para obter o melhor desempenho e eficiência possíveis. As tarefas de otimização comuns podem incluir a minificação de arquivos JavaScript e CSS para reduzir o tamanho do download, a concatenação de arquivos para reduzir o número de solicitações ao servidor, o cache de recursos para melhorar a velocidade de carregamento e a remoção de informações de depuração.

### ✔ Tarefas de compilação e pré-processamento: 
Em um ambiente de desenvolvimento, pode-se configurar tarefas para compilar arquivos LESS, Sass, TypeScript ou outros pré-processadores. No ambiente de produção, pode-se desativar essas tarefas, pois os arquivos já estão compilados e prontos para uso. 

### ✔ Minificação e concatenação: 
Em um ambiente de produção, é comum usar tarefas para minificar e/ou concatenar arquivos JavaScript e CSS, a fim de reduzir o tamanho dos arquivos e melhorar o desempenho de carregamento. Essas tarefas podem ser desabilitadas ou ajustadas em um ambiente de desenvolvimento para facilitar a depuração do código.

### ✔ Variáveis de ambiente: 
É comum ter variáveis de ambiente para distinguir entre os ambientes de desenvolvimento e produção. Essas variáveis podem ser usadas para ativar ou desativar tarefas específicas ou ajustar as configurações com base no ambiente atual. 

### ✔ Geração de sourcemaps: 
Em um ambiente de desenvolvimento, pode-se configurar a geração de sourcemaps para facilitar a depuração, permitindo que os navegadores identifiquem o código original a partir dos arquivos minificados. No ambiente de produção, os sourcemaps podem ser desativados para melhorar o desempenho e reduzir o tamanho dos arquivos.

<br>

## Execute tarefas de forma paralela
### ✔ grunt-concurrent: 
Ao usar o plugin grunt-concurrent, lembre-se de que nem todas as tarefas são adequadas para execução em paralelo, especialmente se elas compartilham recursos ou têm dependências específicas de ordem. Certifique-se de entender as implicações das tarefas que está executando em paralelo e verifique se não há conflitos ou problemas de sincronização.

<br>

## Inicie um projeto com o Grunt 
### ✔ dist (distribuição): 
A configuração específica para gerar a pasta "dist" dependerá do seu projeto e das tarefas configuradas no Grunt. Geralmente, você definirá tarefas de compilação, minificação, concatenação e cópia de arquivos necessários para a criação dos arquivos otimizados. Essas tarefas podem ser executadas individualmente ou como parte de uma tarefa de construção geral, dependendo da configuração do seu projeto. Obs.: A pasta "dist" é apenas uma convenção comum, mas você pode escolher outro nome ou estrutura de diretórios, se preferir.

<br>

## Observe mudanças com o Grunt
> Acompanhe algumas dicas gerais sobre o uso do pacote grunt-contribwatch.
### ✔ Especificar arquivos corretamente: 
Certifique-se de fornecer os padrões de arquivos corretos ao definir quais arquivos o grunt-contrib-watch deve monitorar. Use padrões de globbing para abranger vários arquivos e diretórios, como ``['src/*.js', 'css/**/*.css']``. Isso permitirá que você monitore diferentes tipos de arquivos de forma eficiente.

### ✔ Tarefas específicas: 
Em vez de executar todas as tarefas sempre que ocorrerem alterações, você pode especificar tarefas específicas para serem executadas para tipos de arquivos específicos. Por exemplo, você pode ter uma tarefa para compilar arquivos SASS e outra para recarregar automaticamente o navegador quando arquivos HTML forem modificados. Isso ajuda a otimizar o processo e evitar execuções desnecessárias de tarefas.

### ✔ Opção spawn: 
Por padrão, o grunt-contrib-watch inicia um novo processo para cada tarefa que é executada. Isso pode ser útil para evitar problemas de memória em projetos grandes, mas também pode ser lento em alguns casos. Se você tiver problemas de desempenho, pode experimentar a opção spawn: false para que as tarefas sejam executadas no mesmo processo.

### ✔ Opção event: 
O grunt-contrib-watch suporta vários eventos que podem ser usados para acionar tarefas específicas. Alguns eventos comuns incluem changed (quando um arquivo é modificado), added (quando um novo arquivo é adicionado) e deleted (quando um arquivo é excluído). Você pode configurar tarefas diferentes para diferentes eventos, dependendo do que deseja alcançar.

### ✔ Recarregamento automático: 
Se você deseja que o navegador seja recarregado automaticamente quando ocorrerem alterações nos arquivos, verifique se tem a extensão "LiveReload" instalada e habilitada no seu navegador. Além disso, certifique-se de ativar a opção livereload: true na configuração do gruntcontrib-watch.

<br>

## Comprima HTML com Grunt
> Acompanhe algumas dicas sobre o uso do pacote grunt-contrib-htmlmin.
### ✔ Defina as opções de minificação adequadas: 
O grunt-contrib-htmlmin oferece várias opções para controlar o processo de minificação. Certifique-se de ajustar essas opções de acordo com suas necessidades específicas. Alguns exemplos de opções comuns incluem removeComments para remover comentários, collapseWhitespace para remover espaços em branco e minifyCSS para minificar código CSS embutido. Consulte a documentação do pacote para obter uma lista completa de opções disponíveis.

### ✔ Crie uma configuração flexível: 
Considere a criação de várias configurações para o gruntcontrib-htmlmin que se apliquem a diferentes partes do seu projeto. Por exemplo, você pode ter uma configuração para minificar todos os arquivos HTML em uma pasta específica e outra configuração para minificar apenas arquivos HTML relacionados a determinado módulo ou funcionalidade. Isso permitirá que você aplique diferentes níveis de minificação e personalize o comportamento para cada caso.

### ✔ Teste e valide o resultado: 
Antes de implantar seus arquivos HTML minificados em produção, é importante testar e validar o resultado. Verifique se todas as funcionalidades da sua aplicação ainda estão funcionando corretamente e se o layout e o estilo estão como esperado. Além disso, verifique se não ocorreram alterações indesejadas no código, como remoção de scripts necessários ou alterações em valores de atributos.

### ✔ Combine com outras tarefas do Grunt: 
O grunt-contrib-htmlmin pode ser combinado com outras tarefas do Grunt para otimizar ainda mais o processo de construção. Por exemplo, você pode usar o grunt-contribclean para limpar a pasta de destino antes de cada execução, garantindo que os arquivos HTML minificados estejam sempre atualizados.

>Acompanhe agora algumas dicas sobre o pacote grunt-replace:
### ✔ Defina padrões de pesquisa e substituição adequados: 
Ao configurar a tarefa replace, defina os padrões de pesquisa e substituição que sejam relevantes para o seu caso de uso. Utilize expressões regulares ou strings simples, dependendo da complexidade da substituição desejada. Certifique-se de testar os padrões para garantir que eles correspondam aos trechos de texto corretos.

### ✔ Use arquivos de origem separados: 
Em vez de modificar diretamente os arquivos de origem, é uma boa prática criar cópias dos arquivos de origem e executar a substituição nesses arquivos. Isso evita a perda de dados ou a modificação acidental dos arquivos de origem. Você pode usar a tarefa copy do Grunt para criar essas cópias antes de executar a substituição.

### ✔ Crie backups dos arquivos de destino: 
Antes de executar a tarefa replace, faça backups dos arquivos de destino. Isso é útil caso você precise restaurar os arquivos originais ou caso ocorra algum problema durante o processo de substituição. 

### ✔ Use opções de configuração para personalizar o comportamento: 
O grunt-replace oferece várias opções de configuração que permitem personalizar o comportamento da substituição. Por exemplo, você pode usar as opções prefix e suffix para adicionar prefixos e sufixos aos valores de substituição. Leia a documentação do pacote para entender todas as opções disponíveis e escolha as que se adequem ao seu caso de uso.

### ✔ Teste cuidadosamente: 
Antes de executar a tarefa replace em um ambiente de produção ou em arquivos importantes, faça testes em um ambiente de desenvolvimento ou use um diretório de teste separado. Verifique se a substituição está ocorrendo conforme o esperado e se o resultado é o desejado. Teste diferentes cenários e verifique se não ocorrem substituições indesejadas ou quebras no código.

> Acompanhe algumas dicas sobre o uso do pacote grunt-contrib-clean.
### ✔ Selecione cuidadosamente os arquivos e diretórios a serem limpos: 
Ao configurar a tarefa clean, certifique-se de fornecer caminhos precisos para os arquivos e diretórios que você deseja limpar. Utilize padrões de globbing para selecionar os arquivos corretos. Tenha cuidado para evitar especificar caminhos errados que possam levar à exclusão acidental de arquivos importantes.

### ✔ Combine com outras tarefas: 
O grunt-contrib-clean pode ser combinado com outras tarefas do Grunt para criar fluxos de construção mais avançados. Por exemplo, você pode executar a tarefa clean antes de compilar ou minificar arquivos, garantindo que você esteja trabalhando com um ambiente limpo antes de gerar novos artefatos.

### ✔ Use opções de configuração adequadas: 
O grunt-contrib-clean oferece opções de configuração que permitem personalizar o comportamento da tarefa. Por exemplo, você pode definir a opção force como true para evitar erros ao tentar excluir diretórios vazios. Leia a documentação do pacote para entender as opções disponíveis e escolha as que melhor se adequem ao seu caso de uso.

### ✔ Teste cuidadosamente: 
Antes de executar a tarefa clean em um ambiente de produção ou em arquivos importantes, faça testes em um ambiente de desenvolvimento ou use um diretório de teste separado. Isso ajudará a garantir que a tarefa esteja configurada corretamente e que os arquivos corretos sejam excluídos, sem afetar dados críticos.

<br>

## Conheça a JavaScript Math
### ✔ Função parseInt: 
Essa função também aceita um segundo parâmetro opcional que especifica a base numérica na qual a string está representada. Por padrão, assume-se a base decimal (base 10), mas você pode definir explicitamente a base passando um número inteiro de 2 a 36.

<br>

## Comprima JavaScript com Grunt
> Acompanhe algumas dicas sobre o plugin grunt-contrib-uglify.
### ✔ Configuração básica: 
No arquivo Gruntfile.js, você precisa definir a configuração do "grunt-contrib-uglify" dentro do método grunt.initConfig(). Certifique-se de especificar corretamente os arquivos de origem que você deseja minificar e concatenar, bem como o local de destino do arquivo resultante.

### ✔ Múltiplos arquivos: 
O "grunt-contrib-uglify" permite especificar vários arquivos de origem para serem minificados e concatenados em um único arquivo de destino. Isso é útil para reduzir o número de solicitações HTTP necessárias para carregar o código JavaScript. Basta adicionar os caminhos dos arquivos de origem na configuração, como no exemplo anterior.

### ✔ Opções de configuração: 
Além dos arquivos de origem e de destino, você pode configurar várias opções adicionais para personalizar o processo de minificação. Por exemplo, você pode definir opções como mangle para renomear variáveis e propriedades, compress para controlar o nível de compressão aplicado e sourceMap para gerar arquivos de mapa de origem. Consulte a documentação do UglifyJS para obter mais detalhes sobre essas opções.

### ✔ Opções avançadas: 
O "grunt-contrib-uglify" oferece suporte a várias opções avançadas para personalizar o processo de minificação, como excluir arquivos específicos, ignorar erros de minificação, habilitar compressão condicional e muito mais. Consulte a documentação do plugin para obter informações detalhadas sobre essas opções.

### ✔ Tarefas personalizadas: 
Além da tarefa padrão "uglify", você pode criar tarefas personalizadas com diferentes configurações para atender às suas necessidades específicas. Por exemplo, você pode ter uma tarefa de minificação separada para arquivos de biblioteca e arquivos de aplicativo. Isso permite que você controle o processo de minificação com mais granularidade.

### ✔ Monitoramento de arquivos: 
Para automatizar o processo de minificação sempre que um arquivo de origem for alterado, você pode usar um plugin adicional, como o "grunt-contrib-watch". Esse plugin monitora alterações nos arquivos especificados e executa automaticamente as tarefas Grunt associadas. Isso economiza tempo e esforço ao desenvolver e permite que você se concentre no código em vez de executar manualmente o Grunt repetidamente.