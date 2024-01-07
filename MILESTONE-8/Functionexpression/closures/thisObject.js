/*
The "this" keyword is mainly used to refeer the object.

Calling this keyword by itself:
    It refer to the global window object.
    console.log('this alone', this);
How to Call this in an Object Method:
    Eg:
        const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        getThis : function() {
        return this;
        }
        };
        console.log('this in object method', person.getThis());

How to Call this in a Function:

        function test() {
            console.log('this in a function', this);
        }

        test()

JS provides three methods to manipulate this keyword:
        call
        apply 
        bind


*/