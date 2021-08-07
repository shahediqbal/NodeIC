// npm install ssh2
var Client = require('ssh2').Client;

var cmd = 'tail -f /tmp/foo.log';
var TIMEOUT = 5000;
var host = {
    host: 'business81.web-hosting.com',
    port: 21098,
    username: 'dcarkeji',
    password: '4*85DB1SS83i@2pE'
    
  }

// Init all stuff
var connected = false;
var conn = new Client();
conn.on('ready', function() {
  connected = true;
  console.log('Client :: ready');
  conn.exec(cmd, function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  })
}).on('error', function(data) {
  connected = false;
  console.log('ERROR: ' + data);
})

// Try first connect
conn.connect(host);

// Handle connection retries
setInterval(function() {
  if (!connected) {
    console.log('Trying to connect...')
    conn.connect(host);
  }
}, TIMEOUT);