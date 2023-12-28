/*let a=[3,1,6,8,10,4];
let temp;
let n=a.length;
for(let i=0;i<n;i++)
{
    for(let j=0;j<n;j++)
    {
        if(a[i]<a[j])
        {
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }

}
console.log(a);
*/


const arr = [5, 3, 8, 4, 2, 7, 1];
    const n = arr.length;
    let temp;
  
    for (let i = 0; i < n - 1; i++) 
    {
      for (let j = 0; j < n - i - 1; j++) 
      {
        if (arr[j] > arr[j + 1]) 
        {
           temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  console.log(arr);
  