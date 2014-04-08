var express = require('express');
var app = express();
var fs = require('fs');

var getPosts = function() {
  var postFileNameRegex = /^([^\.]+)\.(\d+).([\w\d]+)$/;
  return fs.readdirSync(__dirname + '/usr/posts').map(function(filename) {
    var match = postFileNameRegex.exec(filename);
    if (!match) { return null; }
    return {
      'url': '/usr/posts/' + filename,
      'slug': match[1],
      'title': match[1].replace(/[_-]/g, ' ').toLowerCase(),
      'date': match[2],
      'format': match[3]
    };
  }).filter(function(entry) {
    return entry !== null;
  });
};

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
  var posts = getPosts();

  return res.json(posts);
});

app.get('/posts/:slug', function(req, res) {
  var posts = getPosts();
  var post = posts.filter(function(post) {
    return post.slug == req.params.slug;
  });

  if (post.length === 0) {
    return res.status(404).send();
  }

  return res.json(post[0]);
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
