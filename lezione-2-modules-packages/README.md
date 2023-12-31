# Lezione 2: Moduli e NPM

## 1. Concetto di Moduli in Node.js

### Definizione:
  - I moduli in Node.js sono unità di codice riutilizzabile che organizzano il codice in un formato modulare.
  - Ogni file in Node.js è considerato un modulo, e i moduli possono esportare funzionalità o dati specifici.

### Vantaggi:
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

### Cos'è npm:
  - npm è il gestore di pacchetti per Node.js e JavaScript.
  - Fornisce un vasto ecosistema di pacchetti e librerie pronte per l'uso.

### Inizializzazione di un Progetto npm:
  - `npm init` inizializza un progetto npm
  - verrà generato il file `package.json` per gestire le informazioni del progetto.

### Installazione e Utilizzo di Pacchetti:
  - `npm install` per installare pacchetti esterni
  - Per impotare i pacchetti si utilizza `require`
  - siccome i pacchetti installati vengono scaricati in una cartella di default (node_modules) è sufficiente importare con il nome del pacchetto

## 4. Gestione delle dipendenze con npm

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

Le dipendenze vengono installate nella cartella `node_modules` e vengono importate con il nome del pacchetto.

Note: la cartella `node_modules` non deve essere versionata. (.gitignore)

## 5. Gestione delle versioni con npm

NPM utilizza il [Semantic Versioning](https://semver.org/lang/it/) per gestire le versioni dei pacchetti.

Il numero di versione è composto da 3 numeri separati da un punto:

- Major: indica una versione con modifiche che non sono retrocompatibili con la versione precedente
- Minor: indica una versione con modifiche retrocompatibili con la versione precedente
- Patch: indica una versione con correzioni di bug

Esempio: `1.0.0`

## 6. ESM

ESM (EcmaScript Modules) è un sistema di moduli per JavaScript che permette di importare ed esportare funzioni e oggetti.

Per utilizzare ESM è necessario aggiungere `"type": "module"` nel file `package.json`.

```json
{
  "type": "module"
}
```

Per importare un modulo si utilizza la keyword `import`:

```javascript
import { greet } from './greet.js';

greet('Mario'); // Output: Ciao, Mario!
```

Per esportare un modulo si utilizza la keyword `export`:

```javascript

const greet = nome => {
  console.log(`Ciao, ${nome}!`);
};

export { greet };
```

## 7. Importare moduli CommonJS in ESM

Per importare un modulo CommonJS in un modulo ESM si utilizza la funzione `createRequire`:

```javascript
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const greetModule = require('./greet');

greetModule.greet('Mario'); // Output: Ciao, Mario!
```

# Esercizio:

- Crea un nuovo progetto nella cartella `lab/` npm utilizzando `npm init`.
- Crea un modulo personalizzato chiamato calculator.js che esporta quattro funzioni: `add` e `subtract` Ogni funzione dovrebbe prendere due numeri come argomenti e restituire il risultato dell'operazione corrispondente.
- In un file `main.js`, importa il modulo calculator e utilizza le sue funzioni per eseguire alcune operazioni matematiche.
- Installa la libreria lodash utilizzando `npm install lodash`.
- Modifica il modulo calculator per utilizzare la funzione _.isNumber di lodash per verificare che gli argomenti passati alle funzioni siano numeri. Se non lo sono, le funzioni dovrebbero restituire un messaggio di errore.
- Assicurati che il tuo package.json rifletta correttamente lodash come una dipendenza del tuo progetto.