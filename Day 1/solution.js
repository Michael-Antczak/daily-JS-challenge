// Challange 1 - Print a left tree

var str = "";

for ( var i = 1 ; i <= 10 ; i++ ) {
    str += "*";
    console.log(str);
}

// Challange 2 - Print a right tree

var stars = "";

for (var j = 0, k = 10 ; j <= 10, k >= 0 ; j++, k--) {
    empty = Array( k + 1 ).join(' ');
    console.log(empty + stars);
    stars += "*";
}

// Challenge 3 

var stars = "*";

for (k = 10 ; k >= 0 ; k--) {

    var empty = Array( k + 1 ).join(' ');
    console.log(empty + stars);
    stars += "**";
    
}

console.log("         ***");
console.log("         ***");
