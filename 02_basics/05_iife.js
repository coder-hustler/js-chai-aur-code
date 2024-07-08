// Immediately Invoked Function Expressions (IIFE)
(function chai() {
    console.log("Inside first IIFE");
}) ();

((name) => {
    console.log(`Inside second IIFE`);
}) ('prem');