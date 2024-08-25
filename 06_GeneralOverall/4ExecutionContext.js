debugger
let userName = 'Alpha'
let userAge = 23

function greet(){
    console.log('Hi');    
}

// Execution context of js 
// 1 memory allocation phase, 2 execution phase
// Sure! Here are the important points about the execution context in JavaScript that you can add
// to your `31_execution.js` file:

// - The execution context is a fundamental concept in JavaScript that manages the code execution process.
// - The global execution context is created when the script is loaded and consists of two phases: Creation
//  Phase and Execution Phase.
// - In the Creation Phase of the global execution context, the global object, `this`, and 
// the outer environment are set up. Function declarations and variables are hoisted.
// - In the Execution Phase, the code is executed line by line.
// - When a function is invoked, a new execution context is created for that function.
// - Each function execution context has its own Variable Environment, Scope Chain, and `this` binding.
// - The Variable Environment stores the function's arguments, parameters, and inner variables.
// - The Scope Chain determines the accessibility of variables and functions within the function.
// - Each execution context has a lexical environment that holds the mapping of identifiers to specific 
// variables/functions available in that context.
// - Lexical scoping allows functions to access variables from their outer scope.
// - JavaScript uses a Call Stack to manage the execution contexts.
// - Each time a function is called, a new execution context is pushed onto the top of the call stack.
// - When a function returns, its execution context is popped off the stack.
// - Closures are created when a function accesses variables from its outer lexical scope even after the 
// outer function has finished executing.
// - Closures allow functions to "remember" their lexical environment even when they are executed outside 
// of their original scope.

