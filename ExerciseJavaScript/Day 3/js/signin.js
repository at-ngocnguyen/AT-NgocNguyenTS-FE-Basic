var data = JSON.parse(localStorage.getItem('DATAUSER'));

function signIn() {
  var name = $('name').value;
  var email = $('email').value;
  var password = $('password').value;
  var repass = $('re-password').value;
  var newUser = data ? data : [];
  var avatar = $('js-img').src;
  var user = {
    email: email,
    password: password,
    name: name,
    avatar: avatar,
  }
  var validate = checkSignin(name, email, password, repass);
  getLink();
  if (validate) {
    alert('Thank for Sign Up');
    newUser.push(user);
    localStorage.setItem('DATAUSER', JSON.stringify(newUser));
    location.replace('./login.html')
  }
  else {
    alert('Form Sign in was invalid');
  }
}

function checkSignin(name, email, password, repass) {
  var validate = true;
  var checkData = data ? data : [];
  if (!name || !email || !password || !repass) {
    return validate = false
  }
  for (var i = 0; i < checkData.length; i++) {
    if (email == checkData[i].email) {
      return validate = false;
    }
  }
  if (password != repass) {
    return validate = false;
  }
  return validate;
}

function getLink() {
  $('js-img').src = './img/user/defaultUser.png';
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files && this.files[0]) {
      $('js-img').src = './img/user/' + this.files[0].name;
    }
  });
}

window.onload = function () {
  $('js-login').onclick = signIn;
  getLink();
}
