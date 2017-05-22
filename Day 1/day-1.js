/* first challenge*/
var result = "";
for (var i = 0; i < 10; i++) {
    result += "*";
    console.log(result);
}

/* second Challenge*/
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
/* third challeneg*/
var counter = 1;
for (var i = 12; i > 0; i--) {
    counter = counter + 2;
    var result = "";
    if (i > 2) {


        for (var j = 0; j < i; j++) {
            result += " ";
        }
        for (var k = counter - 2; k > 0; k--) {
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