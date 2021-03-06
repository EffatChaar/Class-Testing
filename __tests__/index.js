// //frog-jumps function testing

// const frogJumps = require('../lib/frog-jumps.js')
// describe('frogJumps', () => {
//   describe('when start is equal to end', () => {
//     it('should return 0', () => {
//       const result = frogJumps(10, 10, 5)
//       expect(result).toEqual(0)
//     })
//   })
//   describe('when start is greater than end', () => {
//     it('should return 0', () => {
//       const result = frogJumps(100, 10, 5)
//       expect(result).toEqual(18)
//     })
//   })
//   describe('when start is less than end', () => {
//     it('should return the number of jumps, rounded up', () => {
//       const result = frogJumps(1, 10, 5)
//       expect(result).toEqual(2)
//     })
//   })
//   describe('when jump length is 0', () => {
//     it('should return undefined', () => {
//       const result = frogJumps(1, 10, 0)
//       expect(result).toEqual(undefined)
//     })
//   })
//   describe('when jump length is less than 0', () => {
//     it('should return undefined', () => {
//       const result = frogJumps(1, 10, -1)
//       expect(result).toEqual(undefined)
//     })
//   })
//   describe('when jump length is greater than 0', () => {
//     it('should return the number of jumps, rounded up', () => {
//       const result = frogJumps(1, 10, 10)
//       expect(result).toEqual(1)
//     })
//   })
// })

// // palindrome function testing
// const palindrome = require('../lib/palindrome.js')
// describe('palindrome', () => {
//   describe('When entering a string of a word or a sentence', () => {
//     it('should return whether it is a palindrome', () => {
//       const result = palindrome('Mom mom')
//       expect(result).toEqual(true)
//     })
//   })
// })

// //string compressing function testing
// const stringCompress = require('../lib/string-compress.js')
// describe('string compressing', () => {
//   describe('when entering a string with repeated characters', () => {
//     it('should count characters in place', () => {
//       const result = stringCompress('aabbccaadd')
//       expect(result).toEqual('a2b2c2a2d2')
//     })
//   })
//
//   describe('when entering a string with numbers', () => {
//     it('should return 0', () => {
//       const result = stringCompress('111222')
//       expect(result).toEqual(0)
//     })
//   })
//   describe('when entering not a string', () => {
//     it('should return 0', () => {
//       const result = stringCompress(420)
//       expect(result).toEqual(0)
//     })
//   })
//   describe('when entering string contains capitalization, punctuation, and/or spaces ...', () => {
//     it('should ignore those and count the letters', () => {
//       const result = stringCompress('Hello World!')
//       expect(result).toEqual('H1e1l2o1W1o1r1l1d1')
//     })
//   })
//   describe('when is called without argument', () => {
//     it('should return 0', () => {
//       const result = stringCompress()
//       expect(result).toEqual(0)
//     })
//   })
//   describe('when is called with an empty string', () => {
//     it('should return 0', () => {
//       const result = stringCompress('')
//       expect(result).toEqual(0)
//     })
//   })
// })

// //first unique character function tetsing
// const unique = require('../lib/unique-character.js')
// describe('return the first unique character in string', () => {
//   describe('when entering a string with all the same characters', () => {
//     it('should return undefined', () => {
//       const result = unique('aaaaa')
//       expect(result).toBeDefined()
//     })
//   })
//   describe('when entering a string with a uique character', () => {
//     it('should return the character', () => {
//       const result = unique('aabbcdd')
//       expect(result).toEqual('c')
//     })
//   })
//   describe('when entering a string with multiple unique characters', () => {
//     it('should return the first unique character', () => {
//       const result = unique('aabccdee')
//       expect(result).toEqual('b')
//     })
//   })
//   describe('when entering a string with no unique character', () => {
//     it('should return the first character', () => {
//       const result = unique('abcde')
//       expect(result).toEqual('a')
//     })
//   })
// })


// first positive integer function testing
const first = require('../lib/minimal-num.js')
describe('return the first minimal positive integer greater than 0 that does not occur in the array.', () => {
  describe('when entering an empty array', () => {
    it('should return null', () => {
      const result = first([])
      expect(result).toEqual(null)
    })
  })
  // describe('when entering an empty array', () => {
  //   it('should return 1', () => {
  //     const result = first([])
  //     expect(result).toEqual(null)
  //   })
  // })

})