

// Set Timer with 0ms delay
setTimeout(() => {
  console.log('Timer 0ms');
}, 0);

setTimeout(() => {
  console.log('Timer 1s');
}, 1000);


// Process Next Tick
process.nextTick(() => {
  console.log('Next Tick');
});

// Output?
