var dataUser = {
};

function $(id) {
  return document.getElementById(id);
}


//auto next input function
function autotab(original, destination) {
  if (original.getAttribute && original.value.length == original.getAttribute('maxlength')) {
    destination.focus();
  }
}

//auto upperCase fist letter in string
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

function getInfor() {
  var name = titleCase($('js-fname').value) + ' ' + titleCase($('js-lname').value);
  if (dataUser.token === 'default') {
    var token = createToken();
  } else {
    token = dataUser.token;
  }
  var phone = '' + $('js-phone1').value + ' ' + $('js-phone2').value + ' ' + $('js-phone3').value
  dataUser = {
    name: name,
    email: $('js-email').value,
    phone: phone,
    token: token,
  }
  console.log(dataUser);
}

function showInfor() {
  $('js-showname').value = dataUser.name;
  $('js-showemail').value = dataUser.email;
  $('js-showphone').value = dataUser.phone;
}

function nextPrev(n) {
  var pastToken = dataUser.token;
  console.log(pastToken)
  var x = document.getElementsByClassName('tab');
  switch (currentTab) {
    case 0: dataUser.token = 'default';
      dataUser.phone = '';
      break;
    case 1:
      if (n == 1) {
        if (!validPhone()) {
          return false;
        } else if (pastToken !== dataUser.token) {
          alert('Your token is : ' + dataUser.token)
        }
      }
      break;
    case 2:

      if (n == 1) {
        if (!checkToken()) {
          return false;
        }
      }
      break;
  }
  if (n == 1 && !checkForm()) return false;
  x[currentTab].style.display = 'none';
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    $('regForm').submit();
    return false;
  }
  showTab(currentTab);
}

window.onload = function () {
  $('js-resetToken').onclick = function () {
    resetToken();
  };
}