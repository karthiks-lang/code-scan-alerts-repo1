// vulnerable example
function runUserCode(code) {
  eval(code); // potential security issue
}
runUserCode("console.log('hi')");
