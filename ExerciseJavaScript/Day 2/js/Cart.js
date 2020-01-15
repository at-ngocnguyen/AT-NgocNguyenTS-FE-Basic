var data = JSON.parse(localStorage.getItem('CART'))
var cartItem = data ? data : [];
var cart = cartItem;
var showCart = function () {
  data.forEach(getCart);
}
function showTotal() {
  let total = 0;
  if (cart.length > 0) {
    for (var j = 0; j < cart.length; j++) {
      total += data[j].products.price * data[j].count
    }
  }
  // console.log(total)
  var trtotal = document.createElement('tr');
  var td = document.createElement('td');
  td.setAttribute('colspan', '3');
  var td2 = document.createElement('td');

  var tdtotal1 = document.createElement('td');
  tdtotal1.innerHTML = "Total";
  var tdtotal2 = document.createElement('td');
  tdtotal2.style.color = "red";
  tdtotal2.innerHTML = Comma(total) + '<sup>$</sup>';

  trtotal.appendChild(td);
  trtotal.appendChild(tdtotal1);
  trtotal.appendChild(tdtotal2);
  trtotal.appendChild(td2);
  // trtotal.appendChild(tdtotal2);
  document.getElementById("js-cart-item").appendChild(trtotal);
}
function getCart(item, index) {
  // console.log(item)
  var product = item.products;
  var table = document.getElementById("js-cart-item");
  var row = document.createElement('tr');

  //Create td
  var td1 = document.createElement('td');
  td1.innerHTML = index + 1;
  var td2 = document.createElement('td');
  td2.innerHTML = product.name;
  var td3 = document.createElement('td');
  var span = document.createElement('span');
  span.innerHTML = item.count;
  td3.appendChild(span);
  var td4 = document.createElement('td');
  td4.innerHTML = Comma(product.price) + '<sup>$</sup>';
  var td5 = document.createElement('td');
  td5.innerHTML = Comma(product.price * item.count) + '<sup>$</sup>';
  var td6 = document.createElement('td');

  //Create Button Delete
  var buttondel = document.createElement('button');
  var icontrash = document.createElement('i');
  icontrash.setAttribute('class', 'fa fa-trash');
  buttondel.appendChild(icontrash);
  buttondel.onclick = function () {
    delItem(product);
  };
  td6.appendChild(buttondel);
  //Structure Cart Item
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);
  table.appendChild(row)
}
function delItem(product) {
  index = findProductInCart(data, product);
  // console.log(data);
  if (index !== -1) {
    data.splice(index, 1);
  }
  localStorage.setItem('CART', JSON.stringify(data));
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
};
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
window.onload = function () {
  showCart();
  showTotal();
}


