//   export  function checkHeading(str) {
//     return /^(\*)(\*)(.*)\*$/.test(str);
//   }

//   export function replaceHeadingStars(str){
//     return str.replace(/^(\*)(\*)|(\*)$/g, '')
//   }


  export function checkHeading(str) {
  return /^\*\*(.*)\*$/.test(str);  // Checks for **Heading*
}

export function replaceHeadingStars(str) {
  return str.replace(/^\*\*(.*)\*$/, '$1');  // Removes the surrounding stars
}