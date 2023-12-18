
# Lezione 3: Operazioni di I/O e Event Loop

## 1. Operazioni di I/O in Node.js

Node.js fa ampio uso di callback per gestire le operazioni asincrone. Quando un'operazione asincrona è completata, viene chiamata una callback per gestire il risultato. L'Event Loop è responsabile di gestire le callback e di eseguirle quando l'operazione asincrona è completata.

### Esempio di operazione di I/O

```javascript
const fs = require('fs');

// Esempio di lettura asincrona da un file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Errore nella lettura del file:', err);
    return;
  }
  console.log('Contenuto del file:', data);
});
```

### 2. Event Loop

L'Event Loop di Node.js è il meccanismo centrale che consente la gestione degli eventi.
Riceve eventi, li incolonna e li gestisce uno alla volta. È responsabile di eseguire i callback associati agli eventi.

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

Fonte: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
More: https://blog.platformatic.dev/the-nodejs-event-loop

#### Timers

I timers sono gestiti dal modulo `timers` e sono utilizzati per eseguire callback in un momento specifico o dopo un certo periodo di tempo.

```javascript
// Esempio di setTimeout
setTimeout(() => {
  console.log('Hello, World!');
}, 1000);
```

#### Pending Callbacks

Le callback che sono state ritardate dal modulo `timers` vengono gestite in questa fase.

#### Poll

La fase di polling è responsabile di recuperare nuovi eventi dal sistema operativo e di eseguire le callback associate ad essi. Se non ci sono callback da eseguire, questa fase rimane in attesa.

#### Check

La fase di check esegue le callback registrate tramite `setImmediate()`.
Le callback registrate tramite `setImmediate()` vengono eseguite dopo la fase di polling.

```javascript
// Esempio di setImmediate
setImmediate(() => {
  console.log('Hello, World!');
});
```

#### Close Callbacks

La fase di close callbacks esegue le callback registrate tramite `process.nextTick()`.
Le callback registrate tramite `process.nextTick()` vengono eseguite dopo la fase di check.

```javascript
// Esempio di process.nextTick()
process.nextTick(() => {
  console.log('Hello, World!');
});
```

## 3. Gestione degli errori

Le callback di Node.js seguono la convenzione di Node.js per la gestione degli errori. La callback ha sempre due parametri: `error` e `result`. Se `error` è `null` allora `result` conterrà il risultato dell'operazione, altrimenti `error` conterrà l'errore.

```javascript
// Esempio di callback con gestione degli errori
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Errore nella lettura del file:', err);
    return;
  }
  console.log('Contenuto del file:', data);
});
```

## 4. Promises 

Le Promises sono un'alternativa alle callback per gestire le operazioni asincrone. Una Promise rappresenta un'operazione asincrona che può essere completata in futuro. Una Promise può essere in uno dei seguenti stati:

- `pending`: la Promise è in attesa di essere completata.
- `fulfilled`: la Promise è stata completata con successo.
- `rejected`: la Promise è stata completata con un errore.


Per costruire una Promise si utilizza il costruttore `Promise`. Il costruttore accetta una funzione che ha due parametri: `resolve` e `reject`. La funzione viene eseguita immediatamente e può chiamare `resolve` per completare la Promise con successo o `reject` per completare la Promise con un errore.

```javascript
// Esempio di Promise
const fs = require('fs')

const readPromise = new Promise((resolve, reject) => {
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err)
      return
    }
    resolve(data)
  })
})

readPromise
  .then(data => {
    console.log('Contenuto del file:', data)
  })
  .catch(err => {
    console.error('Errore nella lettura del file:', err)
  })
```

## 5. Async/Await

Async/Await è un'alternativa alle Promise per gestire le operazioni asincrone. Async/Await è basato sulle Promise e permette di scrivere codice asincrono in modo più semplice e leggibile.

Per utilizzare Async/Await si utilizza la keyword `async` prima di una funzione. Una funzione async ritorna sempre una Promise. Per utilizzare il risultato di una Promise si utilizza la keyword `await` prima della Promise. L'uso di `await` permette di assegnare il risultato della Promise ad una variabile.

```javascript

// Esempio di Async/Await
const fs = require('fs/promises')

async function readFile() {
  const data = await fs.readFile('file.txt', 'utf8')
  console.log('Contenuto del file:', data)
}

readFile()
```

È possibile convertire una callback in una Promise utilizzando la funzione `util.promisify()`.

```javascript
// Esempio di util.promisify()
const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

async function read() {
  const data = await readFile('file.txt', 'utf8')
  console.log('Contenuto del file:', data)
}

read()
```

## 6. Gestione degli errori con Async/Await

Per gestire gli errori con Async/Await si utilizza il blocco `try/catch`. Il blocco `try/catch` permette di gestire gli errori in modo simile al blocco `try/catch` di altri linguaggi di programmazione.

```javascript
// Esempio di gestione degli errori con Async/Await
const fs = require('fs/promises')

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8')
    console.log('Contenuto del file:', data)
  } catch (err) {
    console.error('Errore nella lettura del file:', err)
  }
}

readFile()
```

## 7. Event emitter

L'Event Emitter è un pattern utilizzato per gestire gli eventi. L'Event Emitter permette di registrare callback per gestire gli eventi e di emettere eventi.

Per utilizzare l'Event Emitter si utilizza il modulo `events`. Il modulo `events` permette di creare un Event Emitter utilizzando la classe `EventEmitter`.

```javascript
// Esempio di Event Emitter
const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('greet', name => {
  console.log(`Hello, ${name}!`)
})

emitter.emit('greet', 'Mario') // Output: Hello, Mario!
```
