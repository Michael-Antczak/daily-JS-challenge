
/*Task 1*/
var result = "";
for (var i = 1; i < 50; i++) {

    if (i % 5 === 0) {
        console.log(result);
        result = "";
    }
    if (i < 5 | i > 44) {
        console.log(result);
        result = "";
    }
    else {
        result += "x";
    }
}

/*  Task 2 */
var counter = 0;
var result = "";
for (var i = 1; i < 105; i++) {

    if (i % 15 === 0) {
        console.log(result);
        result = "";
        counter = 0;
    }
    if (i < 5 || i > 99) {
        console.log(result);
        result = "";
    }
    else if (counter >= 1 && counter < 9) {
        counter++;
        result += " ";
    }
    else if ((counter < 1 && i >= 5) || (counter % 9 === 0)) {
        counter++;
        result += "x";
    }
}

/* Task 3 */
var counter = 0;
var result = "";
for (var i = 1; i < 105; i++) {

    if (i % 15 === 0) {
        console.log(result);
        result = "";
        counter = 0;
    }
    if (i >= 90 && i < 100) {
        result += "x";
    }
    else if (i >= 6 && i < 15) {
        result += "x";
    }

    else if (i < 5 || i > 99) {
        console.log(result);
        result = "";
    }

    else if (counter >= 1 && counter < 9) {
        counter++;
        result += " ";
    }
    else if ((counter < 1 && i >= 5) || (counter % 9 === 0)) {
        counter++;
        result += "x";
    }
}


/* Task 4 */
var result = "";
var result2 = "";
for (var i = 1; i < 455; i++) {
       if (i < 5 || i > 450) {
        console.log(result);
        result = "";
    }
    if (i <= 150 && i>5) {
        if (i % 50 === 0) {
            console.log(result);
            result = "";
            result2 = "";
        }
        if (i % 5 === 0) {
            result += result2;
            result2 = "";
        }
        else {
            result += "x";
            result2 += " ";
        }
    }
    if (i > 150 && i < 301) {
        if (i % 50 === 0) {
            console.log(result2);
            result = "";
            result2 = "";
        }
        if (i % 5 === 0) {
            result2 += result;
            result = "";
        }
        else {
            result += "x";
            result2 += " ";
        }
    }
    if (i >= 301 && i<450) {
        if (i % 50 === 0) {
            console.log(result);
            result = "";
            result2 = "";
        }
        if (i % 5 === 0) {
            result += result2;
            result2 = "";
        }
        else {
            result += "x";
            result2 += " ";
        }
    }
}