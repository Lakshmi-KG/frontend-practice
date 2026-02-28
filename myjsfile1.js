function fequalto() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = x == parseInt(y);
  // place the result in result box
  document.getElementById("res").value = " == result is : " + z;
}

function fequalwithtype() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = x === parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "=== result is : " + z;
}

function fnotequal() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = parseInt (x) != parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "!=  result is : " + z;
}

function fnotequalwithtype() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = parseInt(x) !== parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "!== result is : " + z;
}

function fgreaterthan() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = parseInt(x) > parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "> result is : " + z;
}

function flessthan() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = parseInt(x) < parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "< result is : " + z;
}

function fgtoreuqualto() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = parseInt(x) >= parseInt(y);
  // place the result in result box
  document.getElementById("res").value = ">= result is : " + z;
}

function fltorequalto() {
  // get value of value1 box
  let x = document.getElementById("value1").value;
  // get value of value2 box
  let y = document.getElementById("value2").value;
  let z = parseInt(x) <= parseInt(y);
  // place the result in result box
  document.getElementById("res").value = "<= result is : " + z;
}
