## Para que serve o Mock Genérico

Mock Genérico serve para você criar mocks dinâmicos via api.

Você chama um endpoint [POST] /mock passando os dados do mock que você precisa criar e pronto.

## Como usar

### Criando o Mock
Você deve chamar o endpoint para gravar um mock:

    [POST] http://localhost:3000/mock
Com o Payload:
```
{
	"method": "GET",
	"url": "/path-da-minha-api/22233344456/dados",
	"response": {
		"meuJson": "valor",
		"meuId": 1234
	}
}
```
Descrição dos campos
```
"method": "GET" // Método a ser mockado
"url": "/path-da-minha-api/22233344456/dados" // Path a ser mockado
"response": {} // Payload a ser retornado quando o mock "[GET] /path-da-minha-api/22233344456/dados" for chamado
```

### Recuperando o Mock
    [GET] http://localhost:3000/path-da-minha-api/22233344456/dados

### Qual problema eu resolvi

Estava chamando um serviço em um ambiente de homologação e estava com dificuldade de ter os dados que precisava.
Alterei no arquivo de configurações da minha aplicação o endereço do serviço desejado apontando para o mock e no mock configurei os dados que precisava.

Isso me ajudou a mudar a massa de forma mais dinâmica.