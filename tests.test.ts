import { describe, expect, test } from "vitest";
import * as func from "./functionsToTests"

test("returns a length of string", () => {
    expect(func.lengthString('string')).toBe(6)
})

test("returns if palindrome", () => {
    expect(func.isPalindrome('asd')).toBe(false)
})

test("sort array from lower to larger", () => {
    expect(func.sortArray([8, 11, 7, 9])).toEqual([7, 8, 9, 11]);
});

describe("sqrt number", () => {

    test('sqrt of number', () => {
        expect(func.sqrt(16)).toBe(4)
    })

    test('if negative sqrt of number', () => {
        expect(func.sqrt(-16)).toBe("zero or negative number")
    })
})


describe('sum array',() => {

    test("sum of the elements", () => {
        expect(func.sumArray([2, 3, 5])).toBe(10)
    })

    test('sum grater than 9', () => {
        expect(func.sumArray([2,3,6])).toBeGreaterThan(9)
    })

})

describe('fetch user data', () => {

    test('fetch user data', async () => {
       await expect(func.userData(56)).rejects.toThrowError('not user available')
    })

    test('fetch user data', async () => {
        await expect(func.userData(1)).resolves.toMatchObject({
            name: 'Leanne Graham'
        })
     })

})

describe('fibonacci', () => {
    test('should return next number of fibonacci arr', () => {
      expect(func.fibonacciArray([5, 8, 13, 21])).toBe(34);  
    });
  
    test('should return error "is not fibonacci"', () => {
      expect(func.fibonacciArray([5, 7, 11])).toBe('is not fibonacci');
    });
  
    test('should return error "is not fibonacci" for insufficient elements', () => {
      expect(func.fibonacciArray([5, 8])).toBe('is not fibonacci');
    });
  });
