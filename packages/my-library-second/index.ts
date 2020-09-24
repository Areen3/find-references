import { myLibraryFunction } from '@nxtest';

export function main() {
  const value = myLibraryFunction();

  console.log(`You got foo: "${value.foo}" and bar: ${value.bar}`);
}