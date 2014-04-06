var express = require('express');
var app = express();

app.configure(function() {
  app.set('views', __dirname + '/src/templates');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use('/src', express.static(__dirname + '/src'));
  app.use('/lib', express.static(__dirname + '/bower_components'));
});

app.get('/', function(req, res) {
  res.render('index', {});
});

app.get('/templates/:name', function(req, res) {
  res.render(req.params.name, {});
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
