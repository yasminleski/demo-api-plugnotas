'use strict'

const fs = require("fs")  
const path = require("path")
const axios = require("axios")

const pdfpath = path.resolve(__dirname, 'download', 'nfs-e.pdf') 
const download = fs.createWriteStream(pdfpath)  
                            
   axios({                    
        url: 'https://api.sandbox.plugnotas.com.br/nfse/pdf/604cf635dbb16a3565e709da',
        method: 'get', 
        headers: {
            'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d'},
        responseType: 'stream'  
        })

    .then(function(response){
        response.data.pipe(download);
    })
    .catch(function(error){
        console.log(error)
    }); 