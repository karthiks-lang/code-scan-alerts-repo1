function runUserCode(input) {
  eval(input);  // CWE-94: Code Injection vulnerability
}

runUserCode("console.log('Injected')");
