let re;
// Regular expression
re = /hello/;
re = /hello/i;

console.log(re);
console.log(re.source);



// Functions used to evaluate expressions

// exec() - Return results in an array or null
// const result = re.exec('hello world!');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);


// match() - return result array or null
// const str = 'Hello There'
// const result = str.match(re);
// console.log(result);

// search() - return index of first match or -1 if not found
// const str = 'Hi Hello World!';
// const result = str.search(re);
// console.log(result);

// replace() - return a new string will all matches of pattern
const str = 'Hi James, hello world!';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
