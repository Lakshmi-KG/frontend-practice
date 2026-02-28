function flogicaland() {
  let x = document.getElementById("value1").value;
  let y = document.getElementById("value2").value;
  let z = document.getElementById("value3").value;
  let result = x < y && y > z;
  document.getElementById("res").value = " && result is : " + result;
}

function flogicalor() {
  let x = document.getElementById("value1").value;
  let y = document.getElementById("value2").value;
  let z = document.getElementById("value3").value;
  let result = x < y || x < z;
  document.getElementById("res").value = " && result is : " + result;
}

function flogicalnot() {
  let x = 20;
  let y = 40;
  let z = 60;
  let result = !(x < y) || !(x < z);
  window.alert(result);
}
