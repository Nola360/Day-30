// TRY/ CATCH IS AN ELIGANT WAY OF HANDLING ERRORS

const user = { email: 'jdoe@gmail.com' };


try {
  // Produce a ReferenceError
  // myFunction();


  // Produce a Typeerror - custyomizable with object literal
  // null.myFunction();

  // Will produce SyntaxError
  // console.log(eval('Hello World!'));

  // Will produce a URIError
  // decodeURIComponent('%');


  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  } else {
    console.log('good name!')
  }

} catch (e) {

  console.log(`Userrrr Error: ${e.message}`);

  // logs message of error
  // console.log(e.message);

  // Logs name of error
  console.log(e.name);

  // Test error
  console.log(e instanceof ReferenceError);

  // Logs tyoe of error
  console.log(e instanceof TypeError);

} finally {
  console.log('Finally runs regardless of result.')
}

console.log('Hello World!');




