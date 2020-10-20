module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.flat(); 
    let stack = []
  
    for(let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket)
      if(bracket === '|') {
        continue;
      }
      if(bracketsIndex % 2 === 0 ) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
}
