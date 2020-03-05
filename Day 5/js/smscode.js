function createToken() {
  return Math.floor(Math.random() * 10).toString() + Math.floor(Math.random().toString() * 10) + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
};

function checkToken() {
  var token1 = $('token-1').value;
  var token2 = $('token-2').value;
  var token3 = $('token-3').value;
  var token4 = $('token-4').value;
  var token = '' + token1 + token2 + token3 + token4;
  var y = x[currentTab].getElementsByTagName('input');
  valid = true;
  if (dataUser.token === token) {
    validSucces($('js-code'));
    showInfor();
  } else {
    for (var i = 0; i < y.length; i++) {
      y[i].className += ' invalid';
      valid = false;
    }
    validFalse($('js-code'), 'Valid Code. Please re-input or Reset code');
  }
  return valid
};

function resetToken() {
  var newToken = createToken();
  dataUser.token = newToken;
  modalBox(newToken);
}
window.onload = function () {
  $('js-resetToken').onclick = function () {
    resetToken();
  };
  $('prevBtn').onclick = function () { nextPrev(-1); };
  $('nextBtn').onclick = function () { nextPrev(1); };
  loadInput();
};
