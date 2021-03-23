'use strict'


var axios = require('axios');
var dados = JSON.stringify(
  [
{
  "idIntegracao": "YYYYY111",
  "prestador": {
    "cpfCnpj": "30432183000185"
  },
  "tomador": {
    "cpfCnpj": "07683677000110",
    "razaoSocial":"Casa do cnpj 07683677000110 Indústrias Ltda",
    "inscricaoMunicipal": "8214100099",
    "email": "empresa@casadodoce.com.br",
    "endereco": {
      "descricaoCidade": "São Paulo",
      "cep": "09760020",
      "tipoLogradouro": "Rua",
      "logradouro": "João Batista Leite",
      "tipoBairro": "Vila",
      "codigoCidade": "4115200",
      "complemento": "não tem",
      "estado": "SP",
      "numero": "624",
      "bairro": "Scopel"
    }
  },
  "servico": [
    {
      "codigo": "14.10",
      "codigoTributacao": "14.10",
      "discriminacao": "Descrição dos serviços prestados, utilize | para quebra de linha na impressão.",
      "cnae": "7490104",
      "iss": {
        "tipoTributacao": 7,
        "exigibilidade": 1,
        "aliquota": 3
      },
      "valor": {
        "servico": 1,
        "descontoCondicionado": 0,
        "descontoIncondicionado": 0
      }
    }
  ]
}
]
)

axios({
  method: 'post',
  url: 'https://api.sandbox.plugnotas.com.br/nfse',
  headers: { 
    'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d', 
    'Content-Type': 'application/json'
  },
  data : dados
    })
    
    .then(function (response) {
    console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });