// when variables defined in parant function used by child function 
// and then return the inner function it doesnt return only the iner function
// but also return the varibales we used from parent function 

function parant (){
    // debugger
    let a = 1
    let b = 2

    function child(){

        let c = 3
        let d = 4
        return a + d

        function grandChild(){
            let e = 5
            let f = 6
            return e + f
        }

        return grandChild
        
    }

    return child
}

let fns = parant()