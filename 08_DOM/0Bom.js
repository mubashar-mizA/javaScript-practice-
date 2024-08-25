document.querySelector('#refresh-the-page').addEventListener( 'click', (e)=>{
    e.preventDefault()
    location.reload()

    console.log(location.href);
    
} )

document.querySelector('#close-the-page').addEventListener( 'click', (e)=>{
    e.preventDefault()
    const userConformation =  confirm('Are you sure you want to close the window')
    if(userConformation){
        window.close()
    }
} )

document.querySelector('#print-document').addEventListener( 'click', (e)=>{
    e.preventDefault()
    const userConformation =  confirm('Are you sure you want to print this document')
    if(userConformation){
        window.print()
    }
} )
// browser vendonrs 
// like chrome and safari gave us a method to interact 
// with browser like see location, open or close window, to
// find the height and width of the current window 
// this method is known as BOM 

