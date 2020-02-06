var $ = function (id) {
  return document.getElementById(id);
}
$('form').addEventListener('submit', function (event) {
  event.preventDefault();
})
function checkLogin() {
  var data = JSON.parse(localStorage.getItem('USER'));
  var aIN = document.createElement('a');
  aIN.innerHTML = 'LOG IN';
  aIN.href = './login.html';
  var aSign = document.createElement('a');
  aSign.innerHTML = 'SIGN IN';
  aSign.href = './signin.html';
  var aOUT = document.createElement('a');
  aOUT.innerHTML = 'LOG OUT'
  aOUT.addEventListener('click', function () {
    Logout();
  })

  if (data) {
    var span = document.createElement('span');
    span.innerHTML = 'Hi - ' + data.name;
    $('js-account').appendChild(span);
    $('js-account').appendChild(aOUT);
  } else {
    $('js-account').appendChild(aIN);
    $('js-account').appendChild(aSign);
  }
}
function Logout() {
  localStorage.removeItem('USER');
  location.replace('./NEWS.html');
}
function findComment(data, comment) {
  var index = -1;
  if (data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === comment.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}

checkLogin();

