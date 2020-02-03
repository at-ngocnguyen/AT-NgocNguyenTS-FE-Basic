var $ = function (id) {
  return document.getElementById(id);
}
//PreventDefault Submit Form
const element = document.getElementsByClassName("container");
for (var i = 0; i < element.length; i++) {
  element[i].addEventListener('submit', event => {
    event.preventDefault();
  });
}

var ex1 = function () {
  var first = parseInt($("number1").value);
  var second = parseInt($("number2").value);
  var total1;
  (first === second) ? total1 = (first + second) * 3 : total1 = first + second;
  $("result1").value = total1;
}

var ex2 = function () {
  var number = parseInt($("number").value);
  var total2 = 0;
  (number <= 19) ? total2 = 19 - number : total2 = (number - 19) * 3;
  $("result2").value = total2;
}

var edit_string = function () {
  let string = $("string").value;
  var result3 = [];
  if (!string.includes("*")) {
    document.getElementById("error3").innerHTML = "Input Invalid";
  } else {
    for (let i = 0; i < 10; i++) {
      var edit = string.replace("*", i)
      if (edit % 3 == 0) {
        result3.push(edit);
      }
    }
  }
  return result3
}

function ex3() {
  let string_ex3 = edit_string();
  $("result3").value = string_ex3;
}


function ex4() {
  var result4 = [];
  let string_ex4 = edit_string();
  for (let i = 0; i < 10; i++) {
    if (string_ex4[i] % 2 == 0) {
      result4.push(string_ex4[i])
    }
  }
  $("result3").value = result4;
}

window.onload = function () {
  $("ex1").onclick = ex1;
  $("ex2").onclick = ex2;
  $("ex3").onclick = ex3;
  $("ex4").onclick = ex4;
}