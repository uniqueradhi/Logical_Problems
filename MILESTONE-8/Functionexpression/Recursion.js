/*
Definition:
    Recursion is a function calling itself.
    It has two inputs: 
        a base case (ends recursion).
        a recursive case (resumes recursion).
Syntax:
    function recursiveFunc() {
    // some code here... 
    recursiveFunc()
   }

The Three Parts of a Recursive Function:
        The function definition.
        The base condition.
        The recursive call.

Syntax for base condition:
        function recursiveFunc() {
        if(base condition) {
            // stops recursion if condition is met
        }
        // else recursion continues
        recurse();
        }

Need of base condition:
        wihtout base condition the recursive function runs infinite time.

Example:
function doSomething(n) {
  if(n === 0) {
    console.log("TASK COMPLETED!")
    return
  }
  console.log("I'm doing something.")
  doSomething(n - 1)
}
doSomething(3)

*/