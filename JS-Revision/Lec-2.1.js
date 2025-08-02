// create an array.
let fruits = ["Apple", "Mango", "Banana"];

// second way to create array just for fancyness.
let inFruits = new Array("kiwi", "avacado", "dragon Fruit");

// access the value of an array.
    // console.log(fruits[0]);
    // console.log(inFruits[2]);

// length -> length of the array.

//update value in array.
    fruits[0] = "blueberry";

// Methods in array -> to access the methods in array syntax is (arrayname.)and after that list of array methods you seen in your IDE.
   fruits.push("Green Apple");
   console.log(fruits);

   fruits.unshift("orange");
   console.log(fruits);
    
   fruits.sort();
   console.log(fruits);