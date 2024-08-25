// every mehtod is a function 
let maths = {
    pi : 3.1415723, // now this is called property
    add(a,b){ // just a shortcut to define fns in objects
        return a + b
    },
    suntract:function(a,b){
        return a - b
    },
    square(num){ // just a shortcut to define fns in objects
        return num * num // or a ** 2
    },
    multiply:function(a,b){
        return a * b
    },
    cube(num){
        return num ** 3
    }
}