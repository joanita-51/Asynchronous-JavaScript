/**
 * 1. ForEach()
 * The arr.forEach() method calls the provided function once for each element of the array. 
 The provided function may perform any kind of operation on the elements of the given array.
 *
 * Syntax: array.forEach(callback(element, index, arr), thisValue)
 * 
 * Parameters: This method accepts five parameters as mentioned above and described below:
-callback: This parameter holds the function to be called for each element of the array.
-element: The parameter holds the value of the elements being processed currently.
-index: This parameter is optional, it holds the index of the current value element in the array starting from 0.
-array: This parameter is optional, it holds the complete array on which Array.every is called.
-thisArg: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function.
 If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
 
 * Return value: The return value of this method is always undefined. 
 This method may or may not change the original array provided as it depends upon the functionality of the argument function.
 */

const companies =[
    {name:'Company One', category:'Finance', start:1981, end:2003},
    {name:'Company Two', category:'Retail', start:1992, end:2008},
    {name:'Company Three', category:'Finance', start:1999, end:2007},
    {name:'Company Four', category:'Finance', start:1989, end:2010},
    {name:'Company Five', category:'Finance', start:2009, end:2014},
    {name:'Company Six', category:'Finance', start:1987, end:2010},
    {name:'Company Seven', category:'Finance', start:1986, end:1996},
    {name:'Company Eight', category:'Finance', start:2011, end:2016},
    {name:'Company Nine', category:'Finance', start:1981, end:1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

companies.forEach(function(company){
    console.log(company)

});

//to get the names only 
companies.forEach(function(company){
    console.log(company.name)
});