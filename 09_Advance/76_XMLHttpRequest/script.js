//  XMLHttpRequest is a function that is called by using new keyword
// as we know that when we call a fn by new keyword it will return an object by deafult

function makeNewRequest(method,url){

    const myRequest = new XMLHttpRequest()
    myRequest.responseType = 'json'

    myRequest.addEventListener('load', ()=>{
        console.log(myRequest.response());
    })

    myRequest.open(method, url)
    myRequest.send()
}
 
makeNewRequest('GET', 'https:\\www.google.com')
makeNewRequest('GET', 'https:\\www.github.com')
