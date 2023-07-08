ENTREGA 3:
    
    Esta entrega consiste de um banco de dados a ser usado para o cliente
    TendTudo, uma empresa do setor de vendas que quer expandir para o
    mercado online.

----------------------------------
CRIAÇÃO DO PROJETO
    
    Para esse projeto, utilizaremos uma framework de backend com base
    em Typescript: a Nest.js.

    Para inicializar um projeto em Nest.js inserimos as seguintes linhas
    de código no terminal:
        1. npm i -g @nestjs/cli
        2. nest new <project-name>

    Assim, inicializaremos um servidor backend na máquina local, situado
    na porta de acesso de número 3000 (http://localhost:3000/)

----------------------------------
INICIALIZAÇÃO DO PROJETO
    
    Depois da criação do projeto, uma pasta foi criada no diretório de
    criação do projeto. Para trabalhar nela, devemos entrar na mesma:
        cd tend-tudo
    
    Depois de entrar no diretório do projeto, devemos inicializá-lo:
        npm run start (depois de pressionar enter para confirmar a
        inicialização, o projeto será inicializado)

    Outra opção é um código semelhante:
        npm run start:dev (ajuda na construção do aplicativo em tempo real,
        já que vigia por mudanças e automaticamente recompila o código.)    
    
    Se a inicialização tiver sido bem-sucedida, ao entrarmos no link da
    porta de acesso 3000, deverá aparecer uma mensagem de 'Hello World!'
    em uma tela branca.

    OBS: Para finalizarmos o servidor local, basta digitar CTRL+C no terminal
    e confirmar a ação de finalização.

----------------------------------
INSTALAÇÃO DE BIBLIOTECAS E DEPENDÊNCIAS

    Dentro do diretório do projeto, podemos inicializar o editor de texto.

    1. sqlite3
    Esse é o tipo de banco de dados que vamos estar criando. O sqlite3 é um
    banco de dados de formato mais simples, ótimo para começarmos o estudo
    na área de backend development.

        npm install sqlite3 --save
            (--save inclui essa biblioteca no arquivo package.json)
    
    2. typeorm
    Essa biblioteca é responsável pela interação do banco de dados com o Nest

        npm install @nestjs/typeorm typeorm

----------------------------------
SIMULAÇÃO DO FRONT-END

    Como o front-end deste projeto não está pronto e necessita diretamente,
    do banco de dados para funcionar, devemos simular o front-end e suas
    requisições para configurarmos o banco de dados. Para isso, utilizamos o
    aplicativo Insomnia, o que facilita a visualização, em tempo real, do
    banco de dados e de todas suas requisições.

----------------------------------
HTTP (HYPER TEXT TRANSFER PROTOCOL): SEUS MÉTODOS E VERBOS

    Para o fluxo de informações entre o backend e o frontend, utilizamos o
    protocolo http, que nos fornece mais segurança no tráfetgo de informações.
    Esse protocolo tem alguns métodos (para utilizar esses métodos, utilizamos
    "verbos", que são, basicamente, funções):

        Create -> post
        Read   -> get
        Update -> patch/put
        Delete -> delete

        (a abreviação dos métodos cria a famosa sigla: C.R.U.D.)

    OBS: Há uma tênue diferença entre Patch e Put:
        O Patch recebe por argumento o objeto inteiro a ser atualizado, tendo
        que passar por todas suas informações e sobrescrevendo uma a uma. Por
        outro lado, o verbo put permite passar somente um atributo do objeto a
        ser modificado.
        Ou seja, por um lado, o put tem uma complexidade menor, visto que somente
        sobrescreve um atributo, mas - por outro lado - o verbo patch tem uma maior
        flexibilidade, como permite que alteremos mais de um atributo em somente um
        request.

----------------------------------
EXPLICAÇÃO BÁSICA DA ARQUITETURA DO PROJETO

    Dentro da pasta src, temos alguns arquivos por padrão, dentre eles temos:

    1. main.ts:
        bootstrap() -> Liga as funcionalidades do código, dá run no projeto.

    2. app.module.ts:
        Configura o banco de dados.
        função @Module, dentro dela temos:

            imports: declaramos toda importação de bibliotecas utilizadas

            controllers: gere rotas

            providers: manipulação e interpretação dos dados
    
    3. app.service.ts:
        função @Injectable: chamada dentro de controller, com o método get

    4. app.controller.ts:
        Dentro desse arquivo, criamos as lógicas para cada tipo de request da CRUD.
        Declaramos todos os decoradores: post, get, patch, put e delete.
        Isto é, fazemos a criação da formatação de nosso banco de dados.

----------------------------------
CRIANDO ENTIDADES E TABELAS

    Para criarmos entidades e tabelas, finalizamos a instância atual do nosso
    banco de dados e inserimos o seguinte comando:

        nest generate resource user (nesse caso, criamos uma entidade com o nome 'user')
        ou: nest -g resource user

            Nesse momento escolhemos o tipo da nossa entidade:
                - REST API
                - GraphQL (code first)
                - GraphQL (schema first)
                - Microservice (non-HTTP)
                - webSockets
            (Neste caso, criaremos entidades de tipo 'REST API')

            Depois, podemos escolher se o nest já pode inicializar os pontos de entrada
            do CRUD (Escolhemos sim, para adiantar o trabalho)

    Depois dessa inicialização na entidade, uma pasta com nome de 'user' é adicionada ao 
    diretório 'src'. Dentro dessa pasta, vamos configurar a entidade 'user'.

----------------------------------
PARA CADA ENTIDADE TEMOS:

    1. Uma pasta dto (data transfer object): 
        A forma de passar informação entre JS/TS e JSON

    2. Uma pasta entities:
        Usada para exportar a classe '<nome-da-entidade>'
    
    3. <nome-da-entidade>.controller.spec.ts

    
    4. <nome-da-entidade>.controller.ts

    5. <nome-da-entidade>.module.ts

    6. <nome-da-entidade>service.spec.ts

    7. <nome-da-entidade>.service.ts

----------------------------------
CONFIGURANDO A ENTIDADE

    Depois de instanciarmos uma entidade, é necessário que
    configuremos ela, assim como configuramos o app em si.

    Para essa parte, utilizaremos como exemplo a configuração
    da entidade 'user':

    1. Configuração do arquivo module (imports)
        Nesse caso, só importamos a entidade de 'user'
    
    2. A Entidade em si -> user.entity.ts:
        Cria as colunas da tabela de user

    3. DTO (data transfer object):
        Serve para transformar um objeto do TS/JS em um JSON. É aqui que
        configuramos as padronizações de como um objeto deve ser traduzido
        para um JSON. Engloba os dois métodos possíveis de um JSON: create
        e update.

        A. create-user.dto.ts:
            Explicitamos que informações são necessárias para a criação de
            uma entidade, criamos também, convenções de valores padrões caso
            existam. Aqui, fica claro que atributos da entidade precisam ser
            passados pelo fronter para a instanciação de uma entidade (nem
            todos atributos precisam ser passados -> exemplos: createdAt/id)

    4. Criação das funções de rotas

        A. user.controller.ts
            Nesse arquivo, criamos os algoritmos executados, quando temos um
            pedido do frontend. Ou seja, quando utilizamos o verbo 'get' do http,
            o que é suposto que aconteça? Criamos essas funções dentro de 
            user.controller.ts para o caso de ser uma requesição para a entidade
            user. Devemos fazer o mesmo procedimento para todas outras entidades.

            Como argumentos dos decoradores desse arquivo, temos como passar uma
            rota ou um argumento de função em si:
                Exemplo:
                @Controller('user') -> significa que a rota (endereço da página)
                deve terminar com '/user' para executarmos essa função
                @Controller(':id') -> significa que a função englobada pelo
                decorador vai ter 'id' como parâmetro
        
        B. user.service.ts
            O arquivo user.controller.ts usa as funções de user.service.ts para
            executar os protocolos http. Ou seja, as funcionalidades pesadas, são
            criadas dentro desse arquivo.
            Dentro desse arquivo, devemos injetar o repositório em si. Isto é, 
            importamos a tabela de 'users'.

----------------------------------
ENTIDADES DO PROJETO

    Para a realização do projeto da TendTudo, vamos necessitar de duas entidades:

    1. USER (ou usuário):
        - id
        - username (ou usuário)
        - type (ou tipo)
        - atributos extras
    
    2. PRODUCT (ou produto):
        - id
        - type (ou tipo) -> blusa, calça, calçado, dentre outros
        - price (ou preço)
        - size (ou tamanho) -> varia sua forma para cada tipo de produto
        - quantity (ou quantidade)
        - atributos extras