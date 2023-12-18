const { Transform, pipeline } = require('stream');

const toUpperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Trasformazione in maiuscolo prima di inviare ai dati allo stream di scrittura
    const uppercase = chunk.toString().toUpperCase();
    this.push(uppercase);
    callback();
  }
});

pipeline(process.stdin, toUpperCaseTransform, process.stdout, (err) => {
  if (err) {
    console.error('Pipeline failed.', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});