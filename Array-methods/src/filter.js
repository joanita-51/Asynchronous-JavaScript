/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true.
 * callbackFn is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.
 *  Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.
 * 
 * syntax: array.filter(callback(element, index, arr), thisValue)
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

//Get 21 and older
const canDrink = ages.filter(age  => age >=21)
console.log(canDrink)

//Filter Retail companies
const retailCompanies = companies.filter(company =>company.category==='Retail')
console.log(retailCompanies) 

//Get 80s companies
const eightiesCompanies = companies.filter(company =>company.start>=1980 && company.start<1990 )
console.log(eightiesCompanies);

//Get Companies that lasted more than 10 yers
const lastedTenYears = companies.filter(company => (company.end -company.start)>=10)
console.log(lastedTenYears)