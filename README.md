<h1 align="center">
    <br>
    <p align="center">Reprograma - Semana 14 (Revisão)<p>
</h1>

## Relembrar é viver!

Vimos alguns conteúdos nessas últimas semanas, muuita coisa bacana não é mesmo?
<br />
<br />

![this_is_fine](https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2019/12/30/1577718484944.jpg)
<br />

## Banco de Dados
<br />
Vimos que um banco de dados nada mais é do que uma coleção organizada de dados, e que eles representam alguma abstração de algum aspecto da vida real que pode ser representado em um sistema.
<br />
<br />
Vimos também que existem entidades, que são essas abstrações e atributos.

<br />
<br />

![entidades](https://lh3.googleusercontent.com/proxy/DpZxSHUNU98yE9n_C9Qy4VWnSqfywFz0rsrTgC1_snwuPItQkeTvhGp80kxqffiHV4c4gR_JRMyd2UilUomK59OS8X7teYNPnw8T4Jq4GfFj3V78azGp0eO08A)
<br />

Podemos dizer que as classes e atributos do exemplo acima são:

<br />

```

- Livro: codigo, descLivro, ISBN e editora
- Editoras: codEditora, razaoSocial, conta, telefone

```

Você conseguiria imaginar algum problema que você pretende resolver e abstrair para entidades e atributos? Bom, esse é o primeiro passo para iniciar o seu projeto, ele também faz parte dos processos de levantamento de requisitos no desenvolvimento de software.

<br />

Vimos também que existem SGDBS (Sistemas de Gerenciamento de Bancos de Dados), que são softwares que permitem a manipulação dos dados bem como a sua gestão.

## SQL x NoSQL
<br />

Existem bancos de dados SQL (Structured Query Language) e NoSQL, que possuem as seguintes características:

```
SQL

Baseia-se em um modelo relacional em tabelas (linhas e colunas). Através desse modelo, pode-se manipular dados (atualizar, adicionar, remover, etc.), realizar transações, bem como gerenciar o banco de dados.


NoSQL

São bancos de dados dinâmicos, recomendados para utilização de dados não estruturados, além disso, o dado pode ser armazenado em estruturas independentes.

```

Não existe melhor nem pior, existe aquele modelo de dados que mais se adequa as necessidades da empresa. Precisa de um banco de dados mais estruturado, robusto, que tenha relacionamento entre as entidades, utilize SQL por exemplo. Precisa de dinamismo, flexibilidade e bom desempenho, utilize um NoSQL por exemplo.

<br />

## MongoDB
<br />

O mongo é um banco de dados NoSQL, Open-Source, orientado a objetos (Documentos). 

<br />

![mongo](https://media.geeksforgeeks.org/wp-content/uploads/20200203175502/embedded-example.jpg)


<br />

Nós também vimos como utilizar o mongoShell e seus respectivos comandos para manipular os dados que estão no banco. Bora relembrar:

<br />

Para criar ou chavear entre os bancos de dados existentes:

````
use <databaseName>
````

Para buscar todos os registros sem filtro algum utilizamos o comando find:
<br/>

```
db.collectionName.find()
```
Para buscar registros a partir de um filtro:
<br/>

```
db.collectionName.find({filtros})
```
Para inserir registros novos dentro do banco de dados:
<br/>

```
db.collectionName.inserMany/insertOne({objeto a ser inserido})
```
Para atualizar registros dentro do banco de dados:
<br/>

```
db.collectionName.updateMany/updateOne({filtros},{ $set: {campos a serem atualizados}})
```
Para remover regisros dentro do banco de dados:
<br/>

```
db.collectionName.deleteOne/deleteMany({filtros})

```

Vimos também que quando incluímos um registro no mongo, ele gera um Id único, chamado Object_id, que nada mais é do que um identificador único gerado no momento que o registro é salvo no banco de dados, esse object id é composto pela data e hora que o registro foi incluído no banco. 

<br />
Descobrimos o GUI (Grapical User Interface), que é a interface gráfica que nos auxilia a manipular os dados de uma forma mais amigável, utilizamos o Robo3T.
<br/>
<br/>

![robo](https://blog.robomongo.org/content/images/2017/06/atlas_conn_v1.png)

<br />

## Integração com projeto Node.js
<br />

Anteriormente, nos projetos vistos até então vocês utilizavam um arquivo .json para representar o banco de dados, correto?

Pensando na arquitetura de um sistema, precisamos que os dados não fiquem dentro da aplicação, e sim em uma camada destinado aos dados.

<br />

![banco1](https://usemobile.com.br/wp-content/uploads/2020/10/back-end-front-end.jpg)

Para aplicar os conceitos aprendidos até então e alterar o nosso projeto para que ele busque os dados do banco de dados e NÃO mais do aquivo .json, realizamos os passos abaixo:


<br />

### Mongoose
<br />

Realizamos a instalação da dependência mongoose, que é a nossa interface da aplicação node.js para o banco de dados Mongo.

Para instalar o mongoose no projeto executamos:

````
npm install mongoose
`````

Obs.: não esquecer de importar no mongo essa nova dependência: 

````
const mongoose = require("mongoose")

````

<br />

### String de Conexão
<br />

Para realizar a conexão com o servidor que está rodando localmente no seu computador, precisamos referenciar a string de conexão com o respectivo banco que iremos utilizar no projeto:

<br />

````
mongoose.connect("mongodb://localhost:27017/reprograma", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

````
<br />
Obs.: a porta padrão de comunicação do mongo é a 27017, e a informação contida após esse número é o nome do banco de dados.

<br/>

Para capturar o erro ou o sucesso na conexão, utilizamos a seguinte sintaxe:

````
//Conexão com o mongo

let db = mongoose.connection;

// Captura de erro ou sucesso na conexão

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})
````