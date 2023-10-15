console.log("productOfArray([1,2]): ", productOfArray([1, 2, 3, 4,
    5])); // Output?
    function productOfArray2(arr) {
     if (arr.length === 0) {
     return "Product of empty array not possible";
     } else if (arr.length === 1) {
     return arr[0];
     }
     const newArray = arr.slice(1, arr.length); // [2,3,4,5]
     return arr[0] * productOfArray(newArray);
    }
    console.log(
     "productOfArray2([1,2,3, 4, 5]): ",
     productOfArray2([1, 2, 3, 4, 5])
    ); // Output?
    console.log("productOfArray2([]): ", productOfArray2([])); //
   