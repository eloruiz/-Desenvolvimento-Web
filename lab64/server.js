const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/sobre', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

app.use((req, res) => {
  res.end("404");
});

// Inicia o servidor
app.listen(3000, function(){
  console.log(`Servidor rodando na porta 3000`);
});

res.writeHead(404, { 'Content-Type': 'text/html' });
res.write('<h1>Página não encontrada</h1>');
res.end();

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
