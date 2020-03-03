var dataUser = {
};

function $(id) {
  return document.getElementById(id);
};

//auto next input function
function autotab(original, destination) {
  if (original.getAttribute && original.value.length == original.getAttribute('maxlength')) {
    destination.focus();
  }
};

//auto upperCase fist letter in string
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

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
};

function showInfor() {
  $('js-showname').innerHTML = dataUser.name;
  $('js-showemail').value = dataUser.email;
  $('js-showphone').value = dataUser.phone;
};

function nextPrev(n) {
  var currentPhone = dataUser.phone;
  var x = document.getElementsByClassName('tab');
  switch (currentTab) {
    case 0: dataUser.token = 'default';
      dataUser.phone = '';
      break;
    case 1:
      if (n == 1) {
        if (!validPhone()) {
          return false;
        } else if (currentPhone !== dataUser.phone) {
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
    case 3:
      if (n == 1) {
        $('js-page').style.display = 'none';
        $('js-thank').style.display = 'block'
      }

  }
  if (n == 1 && !checkForm()) return false;
  x[currentTab].style.display = 'none';
  currentTab = currentTab + n;
  showTab(currentTab);
};

window.onload = function () {
  $('js-resetToken').onclick = function () {
    resetToken();
  };
};

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  var x = document.getElementsByClassName('tab');
  x[n].style.display = 'block';
  if (n == 0) {
    $('prevBtn').style.display = 'none';
  } else {
    $('prevBtn').style.display = 'inline';
  }
  if (n == (x.length - 1)) {
    $('nextBtn').innerHTML = 'Submit';
  } else {
    $('nextBtn').innerHTML = 'Next';
  }
  fixStepIndicator(n)
}

function fixStepIndicator(n) {
  // This function removes the 'active' class of all steps...
  var i, x = document.getElementsByClassName('step');
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '');
  }
  //... and adds the 'active' class on the current step:
  x[n].className += ' active';
}
//Edit state of input when check
function validSucces(element) {
  element.nextElementSibling.className = 'success'
  element.nextElementSibling.innerHTML = ' Was-validated' + '<i class="fa fa-check-circle" ></i>';
}

function validFalse(element, content) {
  element.nextElementSibling.className = 'invalid-text'
  element.nextElementSibling.innerHTML = content + '<i class="fa fa-exclamation-triangle" ></i>';
}
