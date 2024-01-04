// muttable -> we change it..
//  in js array and objects are mutable & primitive datatypes can not.


let info={
    name:'radhi',
    age:19,
};
let info1=info;

 info1.name='radhika';
console.log(info,info1);

//spread operator
 info1={...info};

