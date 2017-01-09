"use strict"

// задача 1

var arr = [2, 5, 8, 4, 1, 12];
var arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log("Sorted list: ", arr);

// задача 2
var text = "The quick brown fox jumps over the lazy dog";

var splitText = text.split(" ");

var filterText = splitText.filter(function (item) {
    return item.length > 4;

});
console.log("More than 4 symbols: ", filterText);

// задача 3

(function(){
    $("body").append("<p>repetition is fun!</p>");
    setTimeout(arguments.callee, 1000);
})();
// задача 4



// задача 5

$(document).ready(function() {
   if (!!$.cookie("sessionKey")) {
 //no cookie
} else {
 // have cookie
} 
});