let arr=[1,3,5,6,9];
let key =9;
let n=arr.length;

let result=search(arr,n,key);

if(result==-1)
{
    console.log(`not found`);
}
else{
    console.log(`element found at the index of ${result}`);
}

function search(arr,n,key)
{
    
    for(let i=0;i<n;i++)
    {
        if(arr[i]==key)
        {

            return +i;
        }
    }
    return -1;

}