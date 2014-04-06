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
  app.use('/usr', express.static(__dirname + '/usr'));
});

app.get('/', function(req, res) {
  res.render('index', {});
});

app.get('/templates/:name', function(req, res) {
  res.render(req.params.name, {});
});

app.get('/posts', function(req, res) {
  var postFileNameRegex = /^([^\.]+)\.(\d+).([\w\d]+)$/;
  var posts = require('fs').readdirSync(__dirname + '/usr/posts').map(function(filename) {
    var match = postFileNameRegex.exec(filename);
    if (!match) { return null; }
    return {
      'url': '/usr/posts/' + filename,
      'title': match[1].replace(/[_-]/g, ' ').toLowerCase(),
      'date': match[2],
      'format': match[3]
    };
  }).filter(function(entry) {
    return entry !== null;
  });

  return res.json(posts);
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
