/*-> static keys and dynamic keys 
static key ->assigning value directly to a object
dynamic key ->assigning value to key by using a expresssion

EG:static key

 const obj={
   name:'radhi',
   age:19,
 }
console.log(obj);

EG: dynmaic key:
Three ways:
   1.creating a key and assign to a object.
   2.set a key to a object using define property method.
   3.set the dynamic property keys to an object using ES6 method.

   Eg 1:
    key1="language";

    const object={
      name:"radhi",
      [key1]:"js",
    }

    console.log(object);
   Eg 2:

    let Employee = {
      name: 'Radhika',
      emp_id: 101
  };
  let key = "Company";
  Employee[key] = 'Zoho';
  let key2 = 'role';
  Object.defineProperty(Employee, key2, { value: 'Software Engineer' })
  console.log(Employee);

   Eg 3:*/

      let key1 = "Company";
      let key2 = 'role';
      let Employee = { name : 'Radhika',
         emp_id : 101,
         [key1] : 'Tutorials Point',
         [key2] : 'Software Engineer'
      };

      console.log(Employee);

