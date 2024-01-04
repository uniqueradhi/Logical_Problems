/*In C languages we malloc() and free() for memory management.But in js it allocates memeory automatically 
when we create an object and free the memory content when it is not used.

                Memory Allocation :

const n = 123; // allocates memory for a number
const s = "radhika"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

const a = [1,2,3];//  allocates memory for the array and

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

in some high level languages the programer has to state that the variable ,when it is needed and when it
is not.In high level languages such as js needs automatic management called "Garbage Collection".

The main purpose of garbage collection is to monitor the memory allocation and determine when a block of 
allocated memory is no longer needed and reclaim it.


                    REFERENCE COUNTING GARBAGE COLLECTION:
->An object is said to be "garbage", or collection if there are zero references pointing to it.
->the problem with reference counting algorithm is that it does not suitd for cyclic refernecs.
eg:
let person={
    name:"xyz",
    age:20,
    hobbies:{
        'reading',"writing"
    }
}
let newPerson=person;
let hobbies=newPerson.hobbies;
person=null;
newPerson=null;


                        MARK AND SWEEP ALGORITHM:
->this algorithm resolves the problem faced by the refernce counting algorithm.
->Mark and sweep algorithm checks if a variable, object or array is reachable from 
  the root object and not a reference to a particular object.

                        MANAGING MEMORY:
  ->Managing and coordinating memory in ur software is memory management.


MEMORY LIFE CYCLE IN JS:
THREE WAYS:
    1)Allocation: When we declare a variable, we need to allocate the memory. In JS, this is 
    handled automatically.
    2)Using the allocated memory.
    3)Releasing the memory when not in use anymore. In JS, this is handled automatically 
    (it is called JS garbage collection).

In js the memory is allocated by using stack and heap.

STACK:
    ->it is static memory allocation 
    ->works in LIFO order.
    ->used for primitive datatypes.
    ->the size of the stack is defined during the compile time and it cannot be changed.

HEAP:
    ->dynamic memory allocation.
    ->used for objects and functions and arrays.
    ->the size is defined at the run time.


*/