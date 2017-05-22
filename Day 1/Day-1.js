
/*First tree*/

var result = "";
for (var i = 0; i < 10; i++) {
    result += "*";
    console.log(result);
}


/*Second tree */
var counter = 0;
for (var i = 10; i > 0; i--) {
    counter++;
    var result = "";
    for (var j = 0; j < i; j++) {
        result += " ";
    }
    for (var k = counter; k > 0; k--) {
        result += "*";
    }
    console.log(result);
}

