export function transformLength(string) {
    // Good luck!
     // Get the length of the string
    let length = string.length;
    // Return 1 if the length is even, otherwise return -1
    length % 2 === 0 ? length = 1 : length = -1;

    return length;
  }
  