var array = [88, 22, 242, 1067, 418, 165, 5, 440, 34, 825, 44, 55, 77, 858, 572, 132, 550, 847, 1001, 88, 539, 539, 1089, 440, 187, 891, 198, 627, 660,
    957, 187, 440, 1078, 473, 759, 528, 44, 616, 682, 65, 891, 539, 341, 803, 605, 869, 154, 319, 1023, 781, 440, 737, 583, 968, 330, 33, 539, 143, 396, 715,
    572, 770, 1045, 253, 44, 660, 121, 462, 759, 264, 748, 616, 11, 352, 616, 781, 407, 22, 396, 1001, 33242, 341, 176, 781, 561, 737, 693, 979, 451, 1012,
    396, 594, 242, 440, 440, 308, 726, 363, 143, 880, 264, 517, 352, 660, 1089, 33, 495, 22, 484, 825, 363, 583, 858, 396, 924, 220, 385, 187, 132, 550, 352,
    1078, 891, 308, 704, 253, 737, 110, 286, 418, 5440, 737, 649, 594, 770, 726, 198, 418, 704, 770, 737, 286, 220, 748, 22, 682, 132, 220, 1045, 693, 1034,
    429, 693, 88, 440, 1001, 726, 5539, 1034, 231, 264, 605, 638, 55, 726, 803, 1089, 286, 1067, 187, 858, 858, 1056, 913, 154, 968, 374, 979, 693, 792, 231,
    396, 253, 99, 825, 236, 836, 484, 220, 495, 385, 154, 674, 671, 363, 1067, 374, 341, 363, 1045, 858, 187, 583, 308, 242, 825, 341, 737, 165, 1034, 33, 880,
    44, 682, 176, 154, 99, 583, 616, 1012, 176, 429, 55, 462, 1056, 385, 341, 517, 605, 638, 968, 264, 342, 187, 594, 264, 396, 319, 935, 627, 946, 616, 87,
    528, 385, 781, 979, 77, 55, 484, 484, 407, 484, 660, 231, 638, 561, 594, 187, 638, 209, 880, 891, 748, 55, 1034, 517, 759, 2308, 803, 1012, 143, 946, 572,
    187, 847, 44, 979, 605, 440, 44, 572, 88, 913, 1067, 385, 1089, 176, 77, 1067, 627, 352, 176, 286, 286, 869, 363, 297, 1078, 726, 968, 396, 748, 957, 627,
    682, 220, 792, 33, 506, 6363, 737, 506, 605, 132, 352, 693, 1023, 583, 759, 44, 462, 176, 803, 418, 275, 429, 121, 264, 1034, 792, 198, 88, 506, 319, 352,
    440, 682, 836, 396, 220, 759, 396, 451, 792, 330, 23253, 968, 374, 682, 1089, 759, 902, 737, 649, 935, 814, 44, 396, 176, 220, 803, 385, 319, 858, 341,
    990, 11, 814, 341, 539, 781, 528, 946, 891, 176, 253, 627, 55, 594, 11, 770, 594, 781, 913, 561, 594, 759, 176, 1012, 363, 528, 671, 473, 572, 11, 979,
    209, 737, 528];

/*  Only work below this line */

test1 = [4, 2, 3, 10, 20, 9, 5, 1, 6];
test2 = [10, 3, 5, 6, 20];
test3 =[-10, -3, -5, -6, -20];
test4=[1, -4, 3, -6, 7, 0];
// Task 1 - Get the sum of all the elements in the array


function sumElementsOfArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log("sumElementsOfArray is "+sumElementsOfArray(test1));
// Task 1 - Get the sum of all the elements in the array
//Bonus point
function sumElementsOfArray(array) {
    var sum = array.reduce(function (a, b) {
        return a + b;
    }, 0);

    return sum
}

console.log("sumElementsOfArray without loop is "+sumElementsOfArray(test1));
///////////////////////////////////////////////////////////////////////////////////
// Task 2 - Find a maximum value of all the elements in the array
//way 1

function findMaximumValue1(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max
}
console.log("findMaximumValue way 1 "+findMaximumValue1(array));
// Task 2 - Find a maximum value of all the elements in the array
//way 2
function findMaximumValue2(array) {
 var maxValue = array.reduce(function(a, b) {
    return Math.max(a, b);
});
return maxValue
}
console.log("findMaximumValue way 2 is "+findMaximumValue2(array));
// Task 2* - Find the sum of 5 biggest numbers


function findSum5MaxValue(array) {
    var max = 0;
    array.sort(function(a,b) {
        if (a < b) { return 1; }
        else if (a == b) { return 0; }
        else { return -1; }
    });
    for(var i=0;i<5;i++){
        max+=array[i];
    }
    return max
}
console.log("findSum5MaxValue is "+findSum5MaxValue(array));



/////////////////////////////////////////////////////////////////////////////

// Task 3 - Find a minium value of all the elements in the array
function findMinimumValue(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min
}
console.log("findMinimumValue is "+findMinimumValue(array));



// Task 3* - Find the sum of 5 smallest numbers
function findSum5MinValue(array) {
    var min = 0;
    array.sort(function(a,b) {
        if (a > b) { return 1; }
        else if (a == b) { return 0; }
        else { return -1; }
    });
    for(var i=0;i<5;i++){
        min+=array[i];
    }
    return min
}
console.log("findSum5MinValue is "+findSum5MinValue(test1));
/////////////////////////////////////////////////////////////////////////////////////

// Task 4 - Remove element from array
function removeElement(array, index) {
    return array.splice(index, 1);
}
console.log("deleted element is " + removeElement(test1, 2) + " ,the array after delete is " + test1);

/////////////////////////////////////////////////////////////////////////////////////
// Task 5 - Sort the array
//way 1

function sortBigArray1(array) {
    array.sort(function (a, b) {
        return a - b
    }
    );
    return array
}
console.log("sortBigArray way 1 is "+sortBigArray1(test2));
// Task 5 - Sort the array
//way 2
function sortBigArray2(array) {
    var temp;
    for (var i = array.length; i >= 2; i--) {
        for (var k = 0; k <= i - 1; k++) {
            if (array[k] > array[k + 1]) {
                temp = array[k];
                array[k] = array[k + 1];
                array[k + 1] = temp;
            }
        }
    }
    return array
}

console.log("sortBigArray way 2 is "+sortBigArray2(test2));

// Task 5 - Sort the array
//way 3
function sortBigArray3(array) {
  var temp = 0;
  var max = 0;
  var min = 0;
  var newArray = array.slice(0, array.length);
  for (var i = 0; i < array.length/2; i++) {
    var newArray = array.slice(i, array.length - i);
    max = findMaximumValue2(newArray);
    min = findMinimumValue(newArray);
    //newArray[newArray.indexOf(min)] = newArray[0];
    array[i] = min;
   // newArray[newArray.indexOf(max)] = newArray[newArray.length - 1];
    array[array.length - i-1] = max;
  }
  return array
}
console.log("sortBigArray way 3 is "+sortBigArray3(test2));
///////////////////////////////////////////////////////////////////////////////////////

// Task 6 - Find max product of triplets

function findMaxProduct(array) {
    var max = [];
    var index = []; 
    for (var i = 0; i < array.length - 2; i++) {
        for (var j = i + 1; j < array.length - 1; j++) {
            for (var k = j + 1; k < array.length; k++) {
                max.push(array[i] * array[j] * array[k]);
                index.push([i,j,k]);
            }
        }
    }
    var maxValue = max.reduce(function(a, b) {
    return Math.max(a, b);
});
   
    return [maxValue,index[max.indexOf(maxValue)]]
}

console.log("Find max product of triplets is");
console.log(findMaxProduct(test3));

