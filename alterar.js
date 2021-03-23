'use strict'

var axios = require('axios');
var dados = JSON.stringify(
  {
    "nomeFantasia":"Casa da AGRICULTURA"
  })


axios({
  method: 'patch',
  url: 'https://api.sandbox.plugnotas.com.br/empresa/00111668000106 ',
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
