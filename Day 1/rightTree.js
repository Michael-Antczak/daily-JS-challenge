/* second Challenge*/
var str = 0;

for (var i = 10; i > 0; i--) {
    str++;
    var result = "";
    for (var j = 0; j < i; j++) {
        result += " ";
    }
    for (var k = str; k > 0; k--) {
        result += "*";
    }
    console.log(result);
}