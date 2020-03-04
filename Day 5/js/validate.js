//validate input type email with format abc@123.com
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//validate form when change value
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function checkForm() {
  if (currentTab > 3) {
    currentTab = 3
  }
  valid = true;
  x = document.getElementsByClassName('tab');
  y = x[currentTab].getElementsByTagName('input');


  //validate
  for (i = 0; i < y.length; i++) {
    if (y[i].value == '') {
      y[i].className += ' invalid';
      validFalse(y[i], 'Please fill out this feild')
      valid = false;
    }
    else {
      validSucces(y[i])
      y[i].className += ' was-validated';
    }

  }
  //validate pass
  if ($('js-pass').value.length < 8) {
    $('js-pass').className = ' invalid';
    validFalse($('js-pass'), 'Please input more than 8 character!')
    valid = false;
  }
  else {
    validSucces($('js-pass'))
  }
  if ($('js-repass').value.length < 8 || $('js-repass').value !== $('js-pass').value) {
    $('js-repass').className = ' invalid';
    validFalse($('js-repass'), 'Invalid feild')
    valid = false;
  } else {
    validSucces($('js-repass'));
  }

  //validate email
  if (!validateEmail($('js-email').value)) {
    $('js-email').className = ' invalid';
    validFalse($('js-email'), 'Please input with format <b>123@abc.com</b>!')
    valid = false;
  } else {
    validSucces($('js-email'));
  }

  if (valid) {
    var currenStep = document.getElementsByClassName('step')[currentTab];
    currenStep.className += ' finish';
    if (currenStep.nextElementSibling) {
      currenStep.nextElementSibling.className = 'line-success';
    }
    currenStep.innerHTML = '<i class="fa fa-check" ></i>';
  }
  return valid;
};

function validPhone() {
  var valid = true;
  x = document.getElementsByClassName('tab');
  y = x[currentTab].getElementsByTagName('input');
  for (var i = 0; i < y.length; i++) {
    if (y[i].value.length < y[i].getAttribute('maxlength') || isNaN(y[i].value)) {
      y[i].className += ' invalid';
      validFalse(y[i], 'Invalid feild')
      valid = false;
    }
    else {
      validSucces(y[i]);
      getInfor();
    }
  }
  return valid;
}
