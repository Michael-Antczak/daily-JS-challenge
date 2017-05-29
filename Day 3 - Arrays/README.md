Today's challenges will be around Arrays. You should work inside the file called `day-3.js`. You are given a big array called, surprise surprise... `array`. If you want to, you can always create a smaller array for testing purposes while working on a problem. 

You can assume that all the numbers inside the array are positive numbers and you don't have to test for this. 

## Task 1 - Sum the elements
Create a function called `sumElementsOfArray`. The input to the function should be the given array. 
The function should output a sum of all its elements, i.e.

```
var array = [1,2,3];

sumElementsOfArray(array);

Output -> 6, because 1 + 2 + 3 = 6
```
#### Bonus points: 
Can you write a similar function that does NOT use a for loop? Ask for hint if you struggle. 

## Task 2 - Maximum value
Create a function called `findMaximumValue`. The input to the function should be the given array. 
The function should output the biggest number in the array.

#### Bonus points: 
Can you write a similar function that finds the sum of 5 biggest numbers? Remember to ask for help if you're stuck.

## Task 3 - Minimum value
Create a function called `findMinimumValue`. The input to the function should be the given array. 
The function should output the smalles number in the array.

#### Bonus points: 
Can you write a similar function that finds and returns the product of 3 smallest numbers? Remember to ask for help if you're stuck.

## Task 4 - Remove element 
Create a function called `removeElement`. The input to the function should be the given array and an index position. 
The function should output the array without the removed item, i.e.

```
var array = [1,2,3,4];

var smallerArray = removeElement(array, 1);

smallerArray -> [1,3,4], since removing an element at position 1

```

## Task 5 - Sorting
Create a function called `sortBigArray`. The input to the function should be the given array. 
The function should output sorted array from the smallest element to the biggest, i.e.
```
var array = [4,6,3,7];

sortBigArray(array);

Output -> [3,4,6,7]
```
Hint: The functions you have made so far are enough to do this task. 

#### Bonus points: 
Let's say we are given an array `[221,114,34,98,51,34,76,9]`. In how many way could you sort the array? You don't have to write code, just try to describe in your own words how would you do that. 
