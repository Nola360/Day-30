let re;

// Literal Character
re = /hello/;
re = /hello/i;




// String match
const str = 'Hello World';


// Log result
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);