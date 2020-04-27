var express = require('express');
var app = express();

// instalacion e iniciacion del modulo exprees para crear servidor

app.get('/', function (req, res) {
  res.send('Pagina principal');
});

app.listen(3000, function () {
  console.log('Servidor listo escuchando por el puerto 3000');
});

//direccion y puerto principal del que escucha nuestro navegador