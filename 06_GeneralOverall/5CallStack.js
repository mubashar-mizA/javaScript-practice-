// through call stack js engine track the line of code 
function introduceMe(){
    console.log(`Hi my anme is Mubashar Siddique and Im a developer.`);
    introduceMe()
}
introduceMe()

// in the above code over calstack is fulled, 
// when we exceed the maximum limit of callstack this is known as 
// stack ovreflow 