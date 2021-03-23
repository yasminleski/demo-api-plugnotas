'use strict'


var axios = require("axios")
var dados = JSON.stringify (
    {
        "cpfCnpj":"00111668000106",
        "inscricaoMunicipal":"8214100099",
        "inscricaoEstadual":"400651014075",
        "razaoSocial":"Casa do cnpj 00111668000106 Indústrias Ltda",
        "nomeFantasia":"Casa do cnpj 00111668000106",
        "certificado":"6bg60e382g7f9g510289gcg4",
        "simplesNacional":false,
        "regimeTributario":0,
        "incentivoFiscal":false,
        "incentivadorCultural":false,
        "regimeTributarioEspecial":6,
        "endereco":
                {
                    "tipoLogradouro":"Rua",
                    "logradouro":"João Batista Leite",
                    "numero":"624",
                    "complemento":"não tem",
                    "tipoBairro":"Vila",
                    "bairro":"Scopel",
                    "codigoPais":"1058",
                    "descricaoPais":"Brasil",
                    "codigoCidade":"4115200",
                    "descricaoCidade":"São Paulo",
                    "estado":"Sp","cep":"09760020"
                },
        "telefone":
                {
                "ddd":"11",
                "numero":"112809612"
                },
        "email":"empresa@casadodoce.com.br",
        "nfse":
                {
                "ativo":true,
                "tipoContrato":0,
                "config":
                         {
                        "producao":true,
                        "rps":
                            {
                            "serie":"RPS",
                            "numero":1,
                            "lote":1
                                },
                            "prefeitura":
                                {
                                "login":"teste",
                                "senha":"teste123"
                                },
                            "email":
                                {
                                "envio":true
                                }
                        }
                },
        "nfe":
            {
            "ativo":true,
            "tipoContrato":0,
            "config":
                {
                "producao":true,
                "impressaoFcp":true,
                "impressaoPartilha":true,
                "serie":1,
                "numero":1,
                "dfe":
                    {
                    "ativo":true
                    },
                    "email":{
                        "envio":true
                        }
                }
            },
        "nfce":{
            "ativo":true,
            "tipoContrato":0,
            "config":{
                "producao":true,
                "serie":1,
                "numero":1,
                "email":{
                    "envio":true
                        },
                "sefaz":{
                    "idCodigoSegurancaContribuinte":"string",
                    "codigoSegurancaContribuinte":"string"
                    }
                }
            }
    }
)


axios({
    method: "post",
    url:"https://api.sandbox.plugnotas.com.br/empresa",
    headers:{'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d', 
            'Content-Type': 'application/json'
    },
    data: dados
    })
    
    .then(function(resposta){
        console.log(resposta.data);
     })
     .catch(function(error){
        console.log(error)         
     });  
