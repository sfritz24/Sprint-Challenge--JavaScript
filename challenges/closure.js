// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//nestedfunction is a child of myfunction so it has access to everthing myFunction has however if there was const inside nestedFunction then myFunction wouldn't have access to that const

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(x){
  function add(){
    return 1 + 2 + 3 + x;
  };
  console.log(add());
};

console.log(sumation(4));