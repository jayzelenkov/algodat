// is unique
// implement an algorithm to determine if a string has all uniq chars. What if you cannot use additional data structs?

function is_uniq(str) {
  let sorted = str.split('').sort() // O(log N)
  for (idx in sorted) { // O(N)
    if (sorted[idx-1] === sorted[idx]) {
      return false
    }
  }
  return true
}
// console.log(`uniq: ${is_uniq(process.argv[2])}`)
