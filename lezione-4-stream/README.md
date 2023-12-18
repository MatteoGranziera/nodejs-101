# Lezione 4: Stream

## 1. Cos'è uno Stream

### Definizione:

- Uno stream è una sequenza di dati che viene letta o scritta come un flusso continuo.
- I dati possono essere letti o scritti in modo non continuo, ma in piccoli blocchi (chunk).

### Vantaggi:

- Riduce il tempo di risposta.
- Riduce l'uso della memoria.

### Creazione di uno Stream

```javascript
const fs = require('fs');
const readStream = fs.createReadStream('file.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Dati ricevuti:', chunk);
});

readStream.on('end', () => {
  console.log('Lettura dello stream completata.');
});
```

## 2. Readable Stream

### Definizione:

- Uno stream che può essere letto.
- Emette l'evento `data` quando sono disponibili nuovi dati.
- Emette l'evento `end` quando non ci sono più dati da leggere.

### Esempio di Readable Stream

```javascript
const { Readable } = require('stream');

const readableStream = new Readable({
  read() {
    this.push('Hello, ');
    this.push('World!');
    this.push(null);
  },
});

readableStream.on('data', (chunk) => {
  console.log('Dati ricevuti:', chunk);
});

```

## 3. Writable Stream

### Definizione:

- Uno stream che può essere scritto.
- Emette l'evento `drain` quando il buffer è vuoto.
- Emette l'evento `finish` quando tutti i dati sono stati scritti.

### Esempio di Writable Stream

```javascript
const { Writable } = require('stream');

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log('Dati scritti:', chunk.toString());
    callback();
  },
});

writableStream.on("finish", () => {
  console.log("Finish");
});

writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.end();
```

## 4. Duplex Stream

### Definizione:

- Uno stream che può essere letto e scritto.
- Emette l'evento `data` quando sono disponibili nuovi dati.
- Emette l'evento `end` quando non ci sono più dati da leggere.
- Emette l'evento `drain` quando il buffer è vuoto.
- Emette l'evento `finish` quando tutti i dati sono stati scritti.

### Esempio di Duplex Stream

```javascript
const { Duplex } = require('stream');

const duplexStream = new Duplex({
  read() {
    this.push('Hello, ');
    this.push('World!');
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log('Dati scritti:', chunk.toString());
    callback();
  },
});

duplexStream.on('data', (chunk) => {
  console.log('Dati ricevuti:', chunk);
});

duplexStream.on("finish", () => {
  console.log("Finish");
});

duplexStream.write('Hello, ');
duplexStream.write('World!');
duplexStream.end();
```

## 5. Transform Stream

### Definizione:

- Uno stream che può essere letto e scritto.
- Emette l'evento `data` quando sono disponibili nuovi dati.
- Emette l'evento `end` quando non ci sono più dati da leggere.
- Emette l'evento `drain` quando il buffer è vuoto.
- Emette l'evento `finish` quando tutti i dati sono stati scritti.

### Esempio di Transform Stream

```javascript
const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

transformStream.on('data', (chunk) => {
  console.log('Dati ricevuti:', chunk);
});

transformStream.on("finish", () => {
  console.log("Finish");
});

transformStream.write('Hello, ');
transformStream.write('World!');
transformStream.end();
```

## 6. Piping

### Definizione:

- Il piping è un meccanismo per collegare uno stream di lettura con uno stream di scrittura.

### Esempio di Piping

```javascript


