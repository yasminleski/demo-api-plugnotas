
var axios = require('axios');
var fs = require('fs'); 
var FormData = require('form-data'); 
var arquivo = new FormData(); 


 axios ({
  method: 'post',
  url: 'https://api.sandbox.plugnotas.com.br/empresa/20754238000110/logotipo',
  headers: { 
    'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d'    
  },
  data : arquivo.append ('arquivo', 
         fs.createReadStream('/home/tecnospeed/Imagens/Screenshot_20200911_172143.png'))
   })

    .then(function (response) {  
    console.log(response.data)
    }) 
    .catch(function(error){
    console.log(error)
    });
