# Lezione 1: Introduzione a Node.js

## 1. Cosa è Node.js?
- **Definizione:** Node.js è un runtime JavaScript basato su Chrome V8 che consente l'esecuzione di codice JavaScript sul lato server.
- **Caratteristiche principali:** Single-threaded, event-driven, non bloccante I/O. 
    - Molte connessioni simultanee
- **Utilizzi comuni:** Sviluppo di server web, API, applicazioni real-time.

## 2. Vantaggi di utilizzare Node.js:
- **Velocità di esecuzione:** Grazie al motore V8 di Chrome.
- **Scalabilità:** Gestisce molte connessioni simultanee.
- **Ecosistema npm:** Ampia raccolta di pacchetti e moduli.

## 3. Installazione di Node.js e npm:
- **Sistema Operativo Windows:**
  - Visitare il [sito ufficiale di Node.js](https://nodejs.org/) e scaricare il programma di installazione.
  - Eseguire il programma di installazione e seguire le istruzioni.
- **Sistema Operativo macOS/Linux:**
  - Utilizzare [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) o installare direttamente da sorgenti o tramite package manager (ad esempio, [brew](https://formulae.brew.sh/formula/nvm) su macOS o apt su Ubuntu).
  - Aggiungere al file di config dell'ambiente (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`) 
  ```bash
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```

## 4. Prima applicazione: "Hello World":
- Creare una cartella per il progetto e aprirla nel terminale.
- Creare un nuovo file, ad esempio `hello.js`.
- Aprire `hello.js` con un editor di testo e scrivere il seguente codice:
  ```javascript
  // hello.js
  console.log("Hello, Node.js!");

## 5. Fondamenti di Javascript

Variabili e Tipi di Dati:

- Dichiarazione di variabili: var, let, const.
- Tipi primitivi: string, number, boolean, symbol, null e undefined
- Array e Object

### Funzioni

####  Funzione (tradizionale)
```javascript

function sum(arg1, arg2) {
  return arg1 + arg2
}

sum(2, 3)
```

#### Funzione anonima (tradizionale)
```javascript
;(function (arg1, arg2) {
  return arg1 + arg2
})(2, 3)
```

#### Arrow function
```javascript
const sum = (arg1, arg2) => {
  return arg1 + arg2
}

sum(2, 3)
```

#### Arrow function (short)
```javascript
const sum = (arg1, arg2) => arg1 + arg2

sum(2,3)
```

#### Arrow function anonima
```javascript
;((arg1, arg2) => {
  return arg1 + arg2
})(2, 3)
```

Alle funzioni è possibile passare funzioni come argomenti

```javascript
function foo(fn) {
  fn()
}

foo(function () {console.log("Hello World")})
```

Le funzioni tradizionali possono avere un context e quindi possono accedere al `this` (che potrebbe essere `undefined`).

```javascript
function Esempio() {
  this.valore = 1; // Questo assegnerà il valore nel contesto della funzione Esempio
}

// Per dare un contesto ad una funzione va chiamata usando la keyword `new`, senza il contesto sarà undefined
const esempio = new Esempio();
```


### Costrutti

#### Condizionali

```javascript
if(a === b) { 
  // do something... 
} else if (a == b) {
   // do something else... 
} else {
  // don't know, something else (?)
}

// If in linea
const result = a === b ? "a" : "b")
```


#### for
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### for...of
```javascript
const numeri = [1, 2, 3, 4, 5];

for (const numero of numeri) {
  console.log(numero);
}
```

#### for...in
```javascript
const persona = { nome: 'Mario', età: 30, città: 'Roma' };

for (const chiave in persona) {
  console.log(`${chiave}: ${persona[chiave]}`);
}
```

#### while
```javascript
let contatore = 0;

while (contatore < 3) {
  console.log(contatore);
  contatore++;
}
```

#### do...while
```javascript
let contatore = 0;

do {
  console.log(contatore);
  contatore++;
} while (contatore < 3);
```
#### forEach
```javascript
const numeri = [1, 2, 3, 4, 5];

numeri.forEach(numero => {
  console.log(numero);
});
```

#### map
```javascript
const numeri = [1, 2, 3, 4, 5];

const numeriRaddoppiati = numeri.map(numero => {
  return numero * 2;
});
```

#### switch
```javascript
const colore = 'blu';

switch (colore) {
  case 'rosso':
    console.log('Il colore è rosso');
    break;
  case 'blu':
    console.log('Il colore è blu');
    break;
  default:
    console.log('Il colore non è rosso o blu');
}
```

# Esercizio: modifica il codice nel file `lab/server.js` come segue:
- aggiungere una route `/numbers` che restituisca i numeri da 1 a 10 separati da virgola
- aggiungere una route `/names` che restituisca i nomi delle persone presenti nell'array `names` separati da virgola