
const arr1=[[1,2,3],[4,5,6],[7,8,9]];
const arr2=[[9,8,7],[6,5,4],[3,2,1]];
const result = [];


for(let i=0;i<3;i++)
{
    result[i]=[];
    for(let j=0;j<3;j++)
    {
        result[i][j] = 0;
        for (let k = 0; k < 3; k++) {
          result[i][j] += arr1[i][k] * arr2[k][j];
        };
    }
}

console.log(result);

