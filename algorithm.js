let n = 3;
   
    // Function that return
    // dot product of two vector array.
    function dotProduct(v1,v2)
    {
   
        let product = 0;

        for (let i = 0; i < n; i++)
            product = product + v1[i] * v2[i];
        return product;
    }
   

   
        // dotProduct function call
        console.log("Dot product:");
        console.log(dotProduct(v1, v2) + "<br/>");
   
       
             
               

 