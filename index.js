// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array, name) {
    let result = array.filter(item => item.toLowerCase() === name.toLowerCase())
    return result
}


function fuzzyMatch(array, name){
    let result = array.filter(item => item.slice(0, 1) === name.slice(0, 1));

    return result
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, name){
    let result = drivers.filter(obj => obj.name === name);
        
    return result
}

// `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.





