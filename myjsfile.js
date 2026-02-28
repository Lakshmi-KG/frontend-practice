function fadd() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;

  // perform addition of value1 and value2 values
  let z = parseInt(x) + parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "addition result is : " + z;
}

function fsub() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;

  // perform addition of value1 and value2 values
  let z = parseInt(x) - parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "addition result is : " + z;
}
function fmul() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;

  // perform addition of value1 and value2 values
  let z = parseInt(x) * parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "substraction  result is : " + z;
}

function fdiv() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;

  // perform addition of value1 and value2 values
  let z = parseInt(x) / parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "Division result is : " + z;
}

function fmoduls() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;

  // perform addition of value1 and value2 values
  let z = parseInt(x) % parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "Modulus result is : " + z;
}
function fexp() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;

  // perform addition of value1 and value2 values
  let z = parseInt(x) ** parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "Exponent result is : " + z;
}
