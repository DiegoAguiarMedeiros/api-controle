# Instalação

Usar arquivo usuario.sql para criar a base de dados da api depois configurar os dados da conexão com o banco de dados no arquivo .env

```bash
JWT_SECRET=a36f81d1-1b41-4206-882e-d4828f8bb53c
HOST=localhost
USER=root
PASS=
DB=usuario
PORT=3306
```

# Requisição

## Gerando token

Para gerar o token de autenticação é nescessário enviar um requisição do tipo GET para http://localhost:3000/api/auth
Contendo o usuário e senha de acesso no BODY da requisição

```bash
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://localhost:3000/api/auth',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "user": "user",
    "password": "1234"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

## Cadastrando usuário

Após gerar o token para cadastrar um usuário é nescessário enviar um requisição do tipo POST para http://localhost:3000/api/cadastroUsuario
Contendo os dados do usuário a ser cadastrado no BODY da requisição e o token de acesso no HEADER

```bash
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:3000/api/cadastroUsuario',
  'headers': {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTYzODEwNDYxOSwiZXhwIjoxNjM4MTA2NDE5fQ.xOmaScwjKRJlgqvJ7yQR93ki2M9A5l6Z6iPvgJpMQT4',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "nome": "Teste Teste",
    "email": "teste@teste.com",
    "tel": "(99)99999-9999",
    "data_nasc": "2000-01-01",
    "sexo": 1
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```

## Listando Usuários Cadastrados

Após gerar o token para listar todos os usuários é nescessário enviar um requisição do tipo GET para http://localhost:3000/api/usuarios
Não é nescessário enviar nada no BODY somente o token de acesso no HEADER

```bash
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://localhost:3000/api/usuarios',
  'headers': {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


```

## Listando Usuário Cadastrado

Após gerar o token para listar um único é nescessário enviar um requisição do tipo GET para http://localhost:3000/api/usuario/1
Apenas é nescessário informar o ID do usuário na própria URL de requisição e o token de acesso no HEADER

```bash
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://localhost:3000/api/usuario/1',
  'headers': {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```


# Repostas

## Gerando token

Em resposta de uma requisição do tipo GET para http://localhost:3000/api/auth

```bash
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTYzODEwNDYxOSwiZXhwIjoxNjM4MTA2NDE5fQ.xOmaScwjKRJlgqvJ7yQR93ki2M9A5l6Z6iPvgJpMQT4
```

## Cadastrando usuário

Em resposta de uma requisição do tipo POST para http://localhost:3000/api/cadastroUsuario


```bash
## Sucesso
{
    "success": 1,
    "mensagem": "Usuário cadastrado com sucesso"
}

##Error
{
    "error": 1,
    "errorMensagem": "Nome (nome) não informado"
}
{
    "error": 2,
    "errorMensagem": "E-mail (email) não informado"
}
{
    "error": 3,
    "errorMensagem": "Telefone (tel) não informado"
}
{
    "error": 4,
    "errorMensagem": "Data de Nascimento (data_nasc) não informado"
}
{
    "error": 5,
    "errorMensagem": "Sexo (sexo) não informado"
}
{
    "error": 6,
    "errorMensagem": "Sexo inválido. Informar  0 - Feminino; 1 - Masculino"
}

```

## Listando Usuários Cadastrados

Em resposta de uma requisição do tipo GET para http://localhost:3000/api/usuarios


```bash
[
    {
        "ID": 1,
        "NOME": "teste",
        "EMAIL": "teste@teste.com",
        "TEL": "(99)99999-9999",
        "DATA_NASC": "1988-08-03T03:00:00.000Z",
        "SEXO": 1
    },
    {
        "ID": 2,
        "NOME": "teste",
        "EMAIL": "teste@teste.com",
        "TEL": "(99)999999-999",
        "DATA_NASC": "1988-08-03T03:00:00.000Z",
        "SEXO": 1
    }
]
```

## Listando Usuário Cadastrado

Em resposta de uma requisição do tipo GET para http://localhost:3000/api/usuario/1


```bash
[
    {
        "ID": 1,
        "NOME": "teste",
        "EMAIL": "teste@teste.com",
        "TEL": "(99)99999-9999",
        "DATA_NASC": "1988-08-03T03:00:00.000Z",
        "SEXO": 1
    }
]

```
