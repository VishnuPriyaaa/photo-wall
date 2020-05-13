

function repeat() {
    var arr = ["Tom", "Jack", "Jill", "Jack", "Tom", "Tom"]
    for(var i=0;i<arr.length;i++){
        var maxRepeated = "";
        var count = 0;
        var prevCount = 0;
        for(var j=1;j<arr.length;j++){
            if(maxRepeated != arr[j]){
            if(arr[i] == arr[j]){
                count++;
            }
          }
        }
        if((count>0 && count>prevCount)){
            maxRepeated = arr[i];
            prevCount = count;
        }
    }
    console.log(`Max Repeated word is ${maxRepeated} with count ${count}`);
}
