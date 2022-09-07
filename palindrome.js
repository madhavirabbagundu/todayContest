function palindrome(str){
for(var i = 0; i < str.length/2; i++){
if(str[i]!==str[str.length-1-i]){
return "not palindrome"
}
}
return "palindrome"
}
console.log(palindrome("maam"))