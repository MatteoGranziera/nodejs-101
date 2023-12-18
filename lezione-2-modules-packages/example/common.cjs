const greeting = (name) => new Promise((resolve) => {
  setTimeout(() => resolve(`Hello ${name}!`), 1000);
});

// use an async main function
async function main() {
  console.log(await greeting('CJS'));
}

main();

module.exports = { greeting };