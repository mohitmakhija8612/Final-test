console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/**mohit makhija 200530594 */




// Step 2: Add the 3 people's names to the array
const mearray = ["binod", "cinod", "dinod", "herohiralal", "Mahesh", "Rajesh", "Umesh"];

// Step 4: Remove the first array item from the array
 mearray.shift();

// Step 5 Remove the second array item from the array
mearray.splice(1,1);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable

let result=mearray.filter(function(item)
return item[0]!="hehehe")
// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const button = document.querySelector('button')

button.addEventListener("click",function(){
console.log("call was clicked");
alert("call to action was clicked")
});