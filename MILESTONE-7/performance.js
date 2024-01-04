const t0 = performance.now(); 
  for (let i = 0; i < 10; i++) { 
    console.log(i); 
  } 
  const t1 = performance.now(); 
  console.log(t1 - t0);

  /* the performance method is used to check the performance of our code 
  and to find th execution time of our code.
  */
 
  