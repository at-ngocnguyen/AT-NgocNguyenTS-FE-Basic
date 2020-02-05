var $ = function (id) {
  return document.getElementById(id);
}
$('form').addEventListener('submit', function (event) {
  event.preventDefault();
})
function checkLogin() {
  var data = JSON.parse(localStorage.getItem('USER'));
  // var datacomment = JSON.parse(localStorage.getItem('COMMENT'));
  var aIN = document.createElement('a');
  aIN.innerHTML = 'LOGIN';
  aIN.classList.add('account')
  aIN.href = './login.html';
  var aOUT = document.createElement('a');
  aOUT.innerHTML = 'LOGOUT'
  aOUT.classList.add('account')
  aOUT.addEventListener('click', function () {
    Logout();
  })
  if (data) {
    $('js-account').appendChild(aOUT);
  } else {
    $('js-account').appendChild(aIN);
  }
 
}
function Logout() {
  localStorage.removeItem('USER');
  location.replace('./NEWS.html');
  console.log('abc')
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

