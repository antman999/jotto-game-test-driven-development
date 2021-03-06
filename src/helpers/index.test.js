import { getLetterMatchCount } from "./";

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  test('should correct count when there are not matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord)
    expect(letterMatchCount).toBe(0)
  })

  test('should return correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord)
    expect(letterMatchCount).toBe(3)
  })

  test('should return the correct count duplicate tests in the guess ', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
    
  })

  // test('should return the input lowercase', () => {
  //   const letterMatchCount = getLetterMatchCount('PARTY', secretWord)
  //   expect(letterMatchCount).toBe(true)
  // })
  
  
  
  
})
