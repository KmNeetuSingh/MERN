const http = require('http');
const fs = require('fs');
const path = require('path');
const cluster = require('cluster');
const os = require('os');

// ----- Task 3: Custom EventEmitter -----
class MyEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  off(event, listenerToRemove) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }
}

// ----- Task 5: Cluster Setup -----
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`👑 Master process ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`💀 Worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {
  // ----- Server -----
  const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
      // Task 1: Hello World
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World from worker ' + process.pid);
    }

    else if (url === '/stream') {
     // Task 2: Stream large file
      const filePath = path.join(__dirname, 'large-file.txt');
      const readStream = fs.createReadStream(filePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      readStream.pipe(res);
    }

    else if (url === '/event') {
      // Task 3: Custom EventEmitter example
      const emitter = new MyEmitter();
      const listener = (name) => res.end(`Custom event triggered: Hello ${name}`);
      emitter.on('greet', listener);
      emitter.emit('greet', 'Alice');
      emitter.off('greet', listener);
    }

    else if (url === '/json') {
      // Task 4: Async JSON read
      const jsonPath = path.join(__dirname, 'data.json');
      fs.promises.readFile(jsonPath, 'utf-8')
        .then(data => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(data);
        })
        .catch(err => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error reading JSON file');
        });
    }

    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Route not found');
    }
  });

  server.listen(3000, () => {
    console.log(`🚀 Worker ${process.pid} running at http://localhost:3000`);
  });
}
