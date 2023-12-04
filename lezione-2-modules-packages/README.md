# Lezione 3: Moduli e NPM

## 1. Concetto di Moduli in Node.js

- **Definizione:**
  - I moduli in Node.js sono unità di codice riutilizzabile che organizzano il codice in un formato modulare.
  - Ogni file in Node.js è considerato un modulo, e i moduli possono esportare funzionalità o dati specifici.

- **Vantaggi:**
  - Incrementa la manutenibilità del codice.
  - Favorisce il riutilizzo del codice.
  - Facilita la collaborazione in progetti più grandi.

## 2. Creazione e Utilizzo di Moduli Personalizzati

Per esportare un oggetto e/o funzioni da un modulo si assegna il valore a `module.exports`

```javascript
// greet.js
const greet = nome => {
  console.log(`Ciao, ${nome}!`);
};

module.exports = { greet };
```

Per importare un modulo si utilizza la funzione `require`

```javascript
// main.js
const greetModule = require('./greet');

greetModule.greet('Mario'); // Output: Ciao, Mario!
```


## 3. Introduzione a npm (Node Package Manager)

- **Cos'è npm:**
  - npm è il gestore di pacchetti per Node.js e JavaScript.
  - Fornisce un vasto ecosistema di pacchetti e librerie pronte per l'uso.

- **Inizializzazione di un Progetto npm:**
  - `npm init` inizializza un progetto npm
  - verrà generato il file `package.json` per gestire le informazioni del progetto.

- **Installazione e Utilizzo di Pacchetti:**
  - `npm install` per installare pacchetti esterni
  - Per impotare i pacchetti si utilizza `require`
  - siccome i pacchetti installati vengono scaricati in una cartella di default (node_modules) è sufficiente importare con il nome del pacchetto

## 4. Gestione delle Dipendenze con npm

- `npm install`: installa una dipendenza
- `npm remove`: rimuve una dipendenza

```json
{
  "name": "mio-progetto",
  "version": "1.0.0",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

NPM gestisce 3 tipologie di dipendenze:

- `dependencies`: queste sono dipendenze dirette senza le quali non è possibile eseguire l'applicativo
- `devDependencies`: dipendenze di sviluppo, quelle non necessarie all'esecuzione (`npm install --save-dev`)
- `global`: queste vengono installate nel sistema quindi non si troveranno nel `package.json` (`npm install --global`)

