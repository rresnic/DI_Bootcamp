// I don't understand the assignment. It appears to be completed in the exercise description, I don't see what else needs to be done.

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42])); // Output: "hello"
