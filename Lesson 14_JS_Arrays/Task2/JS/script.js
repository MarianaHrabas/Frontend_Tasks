//розбити строку lorem по розділювачу ‘ ’ і вивести в консоль слова довжиною більше 5

var str = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++){
    if (arr[i].length > 5){
        console.log(arr[i]);
    }
}


var longWords = arr.filter(function(word){
    var wordLength = word.length
    return wordLength > 5;
});
console.log(longWords);