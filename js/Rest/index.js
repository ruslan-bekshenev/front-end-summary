function rest(a,b, ...rest) {
  console.log(a,b, rest, rest.length);
  console.log(arguments)
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}


rest(1, 2, 3, 4, 5, 6, 'a', 'b')