const body = require('body-parser');
const express = require('express');
   
const app1 = express(); 


app1.use(body.json());
   
const handler = serverNum => (req, res) => {
 console.log(`server ${serverNum}`, req.method, req.url, req.body);
 res.send(`Serveur 1 ${serverNum}!`);
};

app1.get('*', handler(1)).post('*', handler(1));
                 
app1.listen(3000); 