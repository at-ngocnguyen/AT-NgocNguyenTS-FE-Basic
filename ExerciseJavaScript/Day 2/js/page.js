var data = JSON.parse(localStorage.getItem('CART'))

if (data) {
  document.getElementById("cart").innerHTML = "  " + data.length;
} else {
  document.getElementById("cart").innerHTML = "  " + 0;
}
function findProductInCart(cart, products) {
  var index = -1;
  // console.log(cart)
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].products.id === products.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}
function Comma(number) {
  number = '' + number;
  if (number.length > 3) {
    var mod = number.length % 3;
    var output = (mod > 0 ? (number.substring(0, mod)) : '');
    for (i = 0; i < Math.floor(number.length / 3); i++) {
      if ((mod == 0) && (i == 0))
        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
      else
        output += '.' + number.substring(mod + 3 * i, mod + 3 * i + 3);
    }
    return (output);
  }
  else return number;
}