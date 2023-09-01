const repeatString = function(string,numbers) {
    if (numbers<0){
        return "ERROR"
    }
    let word = ""

    for ( let i=1;i< numbers;i++){
        word +=string

    }
   
   return word
};

// Do not edit below this line
module.exports = repeatString;
