const frogJumps = require('../lib/frog-jumps.js')
describe('frogJumps', () => {
  describe('when start is equal to end', () => {
    it('should return 0', () => {
      const result = frogJumps(10, 10, 5)
      expect(result).toEqual(0)
    })
  })
  describe('when start is greater than end', () => {
    it('should return 0', () => {
      const result = frogJumps(100, 10, 5)
      expect(result).toEqual(18)
    })
  })
  describe('when start is less than end', () => {
    it('should return the number of jumps, rounded up', () => {
      const result = frogJumps(1, 10, 5)
      expect(result).toEqual(2)
    })
  })
  describe('when jump length is 0', () => {
    it('should return undefined', () => {
      const result = frogJumps(1, 10, 0)
      expect(result).toEqual(undefined)
    })
  })
  describe('when jump length is less than 0', () => {
    it('should return undefined', () => {
      const result = frogJumps(1, 10, -1)
      expect(result).toEqual(undefined)
    })
  })
  describe('when jump length is greater than 0', () => {
    it('should return the number of jumps, rounded up', () => {
      const result = frogJumps(1, 10, 10)
      expect(result).toEqual(1)
    })
  })
})




const palindrome = require('../lib/palindrome.js')
describe('palindrome', () => {
  describe('something', () => {
    it('should return true', () => {
      const result = palindrome('Mom mom')
      expect(result).toEqual(true)
    })
  })
})