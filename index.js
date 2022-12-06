function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through array
for(let i=0;i<array.length;i++){
  let first = array[i]
  for (let j=i+1;j<array.length;j++){
    let second = array[j]

    if((first+second)=== target) return true
    }

  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  3 8 12 4 11 7
  i j         
    i j
      i  j
          i j
            i j
      
      
  3 8 12 4 11 7  // store eacch number that is seen
    i         j
    i       j
    i     j
    i   j
    i j
    i
  3 8 12 4 11 7
       i      j
       i    j
       i j
  3 8 12 4 11 7
          i   j
          i j

  3 8 12 4 11 7
            i j
iterates through the array

takes one number and adds it to all other numbers in the array

if sum = target return true

return false

*/

/*
  Add written explanation of your solution here
  function compares every number in an
  array to check if the sum is equivalent to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([5,15,10,6,14],20))

  console.log("");

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3))


}

module.exports = hasTargetSum;
