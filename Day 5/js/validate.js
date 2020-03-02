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

//validate input type email with format abc@123.com
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
//validate form when change value
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkForm() {

  valid = true;
  x = document.getElementsByClassName('tab');
  y = x[currentTab].getElementsByTagName('input');

  //validate email
  if (!validateEmail($('js-email').value)) {
    valid = false
    $('js-email').className = ' invalid';
  }

  //validate pass
  if ($('js-pass').value.length < 8) {
    valid = false
    $('js-pass').className = ' invalid';
  }
  if ($('js-repass').value.length < 8) {
    valid = false
    $('js-repass').className = ' invalid';
  } else if ($('js-repass').value !== $('js-pass').value) {
    valid = false
    $('js-repass').className = ' invalid';
  }
  //validate
  for (i = 0; i < y.length; i++) {
    if (y[i].value == '') {
      y[i].className += ' invalid';
      valid = false;
    }
    else {
      y[i].className += ' was-validated';
    }

  }
  if (valid) {
    document.getElementsByClassName('step')[currentTab].className += ' finish';
  }
  return valid;
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

function validPhone() {
  var valid = true;

  x = document.getElementsByClassName('tab');
  y = x[currentTab].getElementsByTagName('input');
  for (var i = 0; i < y.length; i++) {
    if (y[i].value.length < y[i].getAttribute('maxlength')) {
      y[i].className += ' invalid';
      valid = false;
    }
    else {
      getInfor();
    }
  }

  return valid;
}
