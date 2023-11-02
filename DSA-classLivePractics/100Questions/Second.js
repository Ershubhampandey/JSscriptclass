

// Simple Javascript program to print 
// next smaller elements in a given array

/* prints element and NSE pair 
for all elements of arr[] of size n */
function printNSE(arr, n)
{
	var next, i, j;
	for (i = 0; i < n; i++)
	{
		next = -1;
		for (j = i + 1; j < n; j++)
		{
			if (arr[i] > arr[j])
			{
				next = arr[j];
				break;
			}
        }
	}
}

// Driver Code
var arr= [11, 13, 21, 3]; 
var n = arr.length;
printNSE(arr, n);


