import axios from "axios"

// return len of string  (1)
export function lengthString(str: string): number {
  return str.length
}

// if string is palindrome  (2)
export function isPalindrome(str: string): boolean {
  const retry: string = str.split("").reverse().join("")
  return str === retry
}

// sort array from lower to larger  (3)
// sort array from lower to larger
export function sortArray(arr: number[]): number[] {
  return arr.slice().sort((a, b) => a - b);
}


// return sqrt of number  (4)
export function sqrt(number: number): number | string {
  if (number <= 0) return 'zero or negative number';
  return Math.sqrt(number)
}

// sum array  (5)
export function sumArray(arr: number[]): number {
  return arr.reduce((a, b) => a + b)
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
// return user data from api by id  (6)
export async function userData(id: number): Promise<User> {
  try {
    return (await axios.get(`https:jsonplaceholder.typicode.com/users/${id}`)).data
  } catch {
    throw new Error('not user available');
  }
}

// reurns next number in fibonacci by array that contain it
export function fibonacciArray(array: number[]): number | string {

  if (array.length < 3) return 'is not fibonacci';

  let result: number = array[array.length - 1] + array[array.length - 2];
  
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] + array[i + 1] !== array[i + 2]) {
      return 'is not fibonacci';
    }
  }
  return result
}