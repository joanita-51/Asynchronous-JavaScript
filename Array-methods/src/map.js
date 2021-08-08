/**
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. 
 * callbackFn is invoked only for indexes of the array which have assigned values (including undefined).
 * Syntax: array.map(function(currentValue, index, arr), thisValue)
 */


 const companies =[
    {name:'Company One', category:'Finance', start:1981, end:2003},
    {name:'Company Two', category:'Retail', start:1992, end:2008},
    {name:'Company Three', category:'Auto', start:1999, end:2007},
    {name:'Company Four', category:'Retail', start:1989, end:2010},
    {name:'Company Five', category:'Technology', start:2009, end:2014},
    {name:'Company Six', category:'Finance', start:1987, end:2010},
    {name:'Company Seven', category:'Auto', start:1986, end:1996},
    {name:'Company Eight', category:'Technology', start:2011, end:2016},
    {name:'Company Nine', category:'Retail', start:1981, end:1989},
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//create an array of comapny names with their start and end years
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap)


//squareroot of the ages
const sqrtAges = ages.map(age=> Math.sqrt(age));
console.log(sqrtAges)

//ages two times
const agesTimesTwo = ages.map(age => age * age);
console.log(agesTimesTwo); 