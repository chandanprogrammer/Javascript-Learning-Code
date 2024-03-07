// Immediately Invoked Function Expressions (IIFE)

// (Function defination)(Function execution)

// Named iife
(function cahi() { 
    console.log(`DB connected`);
})();

// ; jruri hai iife ke case me

// **Global scope se pollution se problem ke resion se globle scope me jo variable use hota hai us pollution ko htane ke liye iife ka use krte hai 

// unnamed or normal iife
(() => { 
    console.log(`Again db connected`);
})();


((name) => {
    console.log(`Again 2 db connected ${name}`);
})('demo');
