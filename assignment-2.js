/**
 * Challenge 1 
 * 
 * Uses two string, one to keep track of the hash for each line and another 
 * to save all line 7 line of hashes and print out using console after 
 * escaping for loops
 * 
 */
var hash = "", line = ""
for (var i = 0; i < 7; i++){
    hash += '#'
    line += hash + '\n'
}
console.log(line)


// Challenge 2
function isEven(number){
    if (isNaN(number))
        console.log("Given input is not a number.")
    else {
        var remainder = number % 2
        if (remainder == 0)
            console.log("The number is even")    
        else 
            console.log("The number is odd")    
    }    
}

isEven("love")
isEven(1020)
isEven(7)
