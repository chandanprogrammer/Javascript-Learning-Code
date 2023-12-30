
// Immediately Invoked Function Expressions (IIFE)

// ()()
(function cahi(){
    console.log(`DB connected`);
})();
// ; jruri hai iife ke case me
(() => {
    console.log(`Again db connected`);
})();

((name) => {
    console.log(`Again 2 db connected ${name}`);
})('demo')

// cahi()