function first(something) {
  console.log(something);
}

function third(name, age, callbackfunction) {
  const info = `My name is ${name} and my age is ${age}`;
  callbackfunction(info);
}

third("Limon", 24, first);
