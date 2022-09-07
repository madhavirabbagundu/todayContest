var str = "gggrrtsveeeeeeeeee"
var count = 0
var out = ""
for(var i = 1; i <= str.length; i++){
     count++
     if(str[i-1] !== str[i]){
        out+=str[i-1]+count
        count = 0
     }
}
console.log(out)