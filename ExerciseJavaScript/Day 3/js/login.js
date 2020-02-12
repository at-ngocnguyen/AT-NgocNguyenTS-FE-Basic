function Login() {
  var email = $('email').value;
  var pass = $('password').value;
  var validate = false;
  if (email && pass) {
    for (var i = 0; i < user.length; i++) {
      if (email === user[i].email && pass === user[i].password) {
        location.replace('./NEWS.html');
        var userInfor = {
          name: user[i].name,
          avatar: user[i].avatar,
          email: user[i].email
        };
        localStorage.setItem('USER', JSON.stringify(userInfor));
        validate = true;
      }
    }
    if (validate) {
      alert('Thank for Login');
    } else {
      alert('Email or Password was invalid')
    }
  } else {
    alert('Please fill out form LOGIN')
  }
}

function Logout() {
  localStorage.removeItem('USER');
  location.replace('./NEWS.html');
}

window.onload = function () {
  $('js-login').onclick = Login;
}
