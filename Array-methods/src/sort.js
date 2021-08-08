/**
 * The sort() method sorts the elements of an array in place and returns the sorted array. 
 * The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 * syntax: arr.sort(compareFunction)
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

//Sorting companies by their start year
const sortedCompanies = companies.sort((c1, c2)=>(c1.start > c2.start ? 1 : -1));
console.log(sortedCompanies);

//sort ages from lowest to highest
//for ascending order its a-b

const sortAges = ages.sort((a,b) => a-b);
console.log(sortAges)

//for descending order its b-a
const sortingAges = ages.sort((a,b)=>b-a)
console.log(sortingAges)