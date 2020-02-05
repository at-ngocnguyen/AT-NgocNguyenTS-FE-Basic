var users = [
  {
    email: 'nguyenthusongngoc@gmail.com',
    password: '123123123',
    name: 'THIEU NGUYEN',
    avatar: './img/user/thieu.png',
  },
  {
    email: 'tannguyen@gmail.com',
    password: '123123123',
    name: 'TAN NGUYEN',
    avatar: './img/user/tan.png',
  }
]
function Login() {
  var email = $('email').value;
  var pass = $('email').value;
  console.log('abc')
  if (email && pass) {
    for (var i = 0; i < users.length; i++) {
      console.log(users[i])
      if (email == users[i].email || pass == users[i].password) {
        alert('Thank for LOGIN')
        location.replace('./NEWS.html');
        var userInfor = {
          name: users[i].name,
          avatar: users[i].avatar,
          email: users[i].email
        };
        localStorage.setItem('USER', JSON.stringify(userInfor));
      }
      else {
        alert('Email or Password was invalid')
      }
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
