//using default parametrs

function hello(name="hello")
{
    console.log(name);
}
hello();

//passing parameters through function declaration.

function print(msg)
{
    console.log(msg);
}

print("Hello");

//using the arguments object.

function add()
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    console.log(sum);
}

add(1,2,3,4,5);

//passing parameters through spread operator

function add(...num)
{
    let sum=0;
    for(let number of num)
    {
        sum+=number;
    }
    console.log(sum);
}

add(1,2,3,4,5);


//by using callback functions

function addfunction(a,b,callback){
    setTimeout(function()
    {
        const result=a+b;
        callback(result);
    },1000);
}

function display(sum)
{
    console.log(sum);
}

addfunction(2,3,display);
