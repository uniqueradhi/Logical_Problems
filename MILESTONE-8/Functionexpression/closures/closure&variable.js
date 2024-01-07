/*
    closures allows us to access the  to an outer function's scope from an inner function.
    closures are created every time a function is created, at function creation time.

    Eg for lexical scoping:
                function init() {
                var name = "Mozilla"; // name is a local variable created by init
                function displayName() {
                    // displayName() is the inner function, that forms the closure
                    console.log(name); // use variable declared in the parent function
                }
                displayName();
                }
                init();
        -The parent function init.the displaName function does not have any variables but it access the 
        variable from its outer function init.
*/