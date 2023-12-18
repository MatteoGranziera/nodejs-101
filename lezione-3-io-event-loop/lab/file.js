const fs = require('fs');


const writeFile = (fileName, data) => {
  fs.writeFile(fileName, 'Hello World!', (err) => {
    if (err) {
      console.error('Errore nella scrittura del file:', err);
      return;
    }
    console.log('File scritto correttamente');
    readFile(fileName);
  });
};

const readFile = (fileName) => { 
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Errore nella lettura del file:', err);
      return;
    }
    console.log('Contenuto del file:', data);
  })
};

writeFile('file.txt', 'Hello World!')