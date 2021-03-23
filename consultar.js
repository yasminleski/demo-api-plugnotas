'use strict'

var axios = require('axios');

    axios ({
      method: 'get',
      url: 'https://api.sandbox.plugnotas.com.br/empresa/00111668000106',
      headers: {
        'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d'
      }
    })
    
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    