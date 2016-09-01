// 1.1 is unique
// implement an algorithm to determine if a string has all uniq chars. What if you cannot use additional data structs?

const is_uniq = (str) => {
  const sorted = str.split('').sort() // O(log N)
  for (idx in sorted) { // O(N)
    if (sorted[idx-1] === sorted[idx]) {
      return false
    }
  }
  return true
}
// console.log(`is_uniq: ${is_uniq(process.argv[2])}`)


// 1.2 check permutation (p.90)
// given two strings write a method to decide if one is a permuation of the other
const check_permutation = (str1, str2) => {
  if (str1.length !== str2.length) return false
  let sorted_str1 = str1.split('').sort().join('')
  let sorted_str2 = str2.split('').sort().join('')
  return sorted_str1 === sorted_str2
}

console.log(`check_permutation: ${check_permutation(process.argv[2], process.argv[3])}`)
