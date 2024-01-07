/*Four types of memory leaks in js.
Memory leaks:
        It is defined as a piece of memory that is no longer used.

        1.undeclared /global variables:
            function foo(arg){
                bar="this is a global variable";
            }

            -to avoid this we have to use strict mode in the begining of the js file.

        2.Forgotten timers or callbacks:
        3.Out DOM references.     
        4.Closures.
*/