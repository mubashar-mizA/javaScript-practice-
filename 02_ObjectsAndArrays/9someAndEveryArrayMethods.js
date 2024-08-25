let nums = [2,4,6,9,8,10]
nums.every( (num,index,array)=>{
    if(num % 2 === 1){
        console.log(index);
    }
    return num % 2 === 1
} )

const myNums = [1,2,3,4,5]
console.log(myNums.some( (ele,i,arr)=>{
    return ele > 2
} ))
