var arr = [2,5,6,8]
var arr1 = [3,8,5,1,7]

function night_dance(arr,arr1){
    var res = 0
    arr.sort((a,b)=>a-b)
    arr1.sort((a,b)=>a-b)
if(arr.length > arr1.length){
    res = arr1.length
}
else{
    res = arr.length

}
if(arr.length > arr1.length){
return false
}
var i = 0;
 var j = 0
 while(i < res && j < res){
    if(arr[i] <= arr1[j]){
        return false;
    }
    i++
    j++
 }
 return true
}
console.log(night_dance([2,5,6,8],[3,8,5,1,7]))