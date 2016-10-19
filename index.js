var https = require('https');
var querystring = require('querystring');

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/subscribe', function(request, response) {
  var data = querystring.stringify({
    'name': 'web',
    'company': 'web',
    'email': request.query.email,
    'from': 'web',
  });

  var options = {
    protocol: 'https:',
    host: 'admin.officewell.co',
    path: '/api/v1/feedback',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var req = https.request(options);
  req.write(data);
  req.end();
  response.send('success');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


