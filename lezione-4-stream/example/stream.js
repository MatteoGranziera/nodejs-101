const { Readable, Writable } = require("stream");

let data = ["Dato1", "Dato2", "Dato3"];
let index = 0;

// Creazione di un oggetto stream
const readableStream = new Readable({
  // Opzioni, se necessarie
  read(size) {
    if (index < data.length) {
      // Push dei dati nello stream
      this.push(data[index]);
      index++;
    } else {
      // Fine dello stream
      this.push(null);
    }
  }
});

// Creazione di un oggetto stream
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log("Dato scritto:", chunk.toString());
    callback();
  }
});


// Collegamento dello stream di lettura a quello di scrittura
readableStream.pipe(writableStream);

// Gestione degli eventi di scrittura
writableStream.on("finish", () => {
  console.log("Scrittura dello stream completata.");
});
