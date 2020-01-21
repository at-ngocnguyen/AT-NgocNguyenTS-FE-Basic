var data = JSON.parse(localStorage.getItem('CART'));
var tbody = document.getElementById('js-cart-list');
var tfoot = document.getElementById('js-cart-bottom');
var showCart = function () {
  data.forEach(getCart);
}
function getCart(item, index) {
  var product = item.products;
  var row = document.createElement('tr');
  // var tbody = document.createElement('tbody');
  tbody.classList.add('tbody_style')
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
  icontrash.classList.add('fa');
  icontrash.classList.add('fa-trash');
  buttondel.appendChild(icontrash);
  buttondel.addEventListener('click', function () { delItem(product) });
  td6.appendChild(buttondel);
  //Structure Cart Item
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);
  tbody.appendChild(row);
}
function showTotal() {
  var total = 0;
  var nonecart = document.createElement("td")
  if (data.length) {
    for (var j = 0; j < data.length; j++) {
      total += data[j].products.price * data[j].count
    }
  } else {
    nonecart.colSpan = 6;
    nonecart.innerHTML = '<h2>You don&rsquo;t have product in Cart, Please <a href="./home.html">click here</a> to continute</h2>'
    tbody.appendChild(nonecart);
  }
  var trtotal = document.createElement('tr');
  var td = document.createElement('td');
  td.setAttribute('colspan', '3');
  var td2 = document.createElement('td');

  var tdtotal1 = document.createElement('td');
  tdtotal1.innerHTML = 'Total';
  var tdtotal2 = document.createElement('td');
  tdtotal2.style.color = 'red';
  tdtotal2.innerHTML = Comma(total) + '<sup>$</sup>';

  trtotal.appendChild(td);
  trtotal.appendChild(tdtotal1);
  trtotal.appendChild(tdtotal2);
  trtotal.appendChild(td2);
  tfoot.appendChild(trtotal);
}
function delItem(product) {
  var retVal = confirm('Do you want to delete ?');
  index = findProductInCart(data, product);
  console.log(shownumber());
  if (retVal) {
    if (index !== -1) {
      data.splice(index, 1);
    }
    localStorage.setItem('CART', JSON.stringify(data));
    tbody.innerHTML = '';
    tfoot.innerHTML = '';
    showCart();
    showTotal();
    shownumber();
  }
}

window.onload = function () {
  showCart();
  showTotal();
}


