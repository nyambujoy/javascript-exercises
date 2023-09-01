const reverseString = function(str) {
 return str.split("").reverse().join("")

};
//using a for loop
function reveStr(strr){
    let newStr = ""
    for (i = strr.length -1 ; i>=0;i--){
        newStr += strr[i]
        console.log(newStr)
    }
}

// Do not edit below this line
module.exports = reverseString;
