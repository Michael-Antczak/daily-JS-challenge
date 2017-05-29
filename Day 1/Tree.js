/*the chrismass tree*/
var str = 1;
for (var i = 12; i > 0; i--) {
    str = str + 2;
    var result = "";
    if (i > 2) {


        for (var j = 0; j < i; j++) {
            result += " ";
        }
        for (var k = str - 2; k > 0; k--) {
            result += "*";
        }

        console.log(result);
    }
    else {
        for (var j = 11; j > 0; j--) {
            result += " ";
        }
        for (var k = 5; k > 2; k--) {
            result += "*";
        }
        console.log(result);

    }

}