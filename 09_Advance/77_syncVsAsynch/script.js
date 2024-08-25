console.log(`Working`);

// js is single threaded programming language 
// when our code run line by line then it is known as synch code/programm
// when our code is not line dependent then it is known as asynch
// synch program use main thread, while asynch dont use main thread of javaScript

// asynch code go to browser, means  that asynch code is handled by the browser 
// because browser is written in some multiple threade pogramming language like c++ 

// synch code examples include our loops,functions and normal l-b-l code etc...

// we can block our main js thread simple by using alrt fn until we press ok 



setTimeout( ()=>{
    console.log("Mubasahar Siddique");
},5000 )



document.querySelector('#block-thread').addEventListener('click', ()=>{
  
    alert('Main javaScript thread blocked')
    const strtTime = Date.now()
    let curTime = strtTime

    while( strtTime + 4000 > curTime ){
        curTime = Date.now()
    }

    let i = 1
    while(i>10 && i <20){
        i++
    }

})
// feaching data doesnt block the main thread 

let myReq = new XMLHttpRequest()
myReq.responseType = 'json'
