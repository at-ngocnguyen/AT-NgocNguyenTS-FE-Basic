var data = []
data = JSON.parse(localStorage.getItem('CART'))
var table = document.getElementById("js-cart-item");
var showCart = function () {
  data.forEach(getCart);
}
function getCart(item, index) {
  // console.log(item)
  var product = item.products;
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
function showTotal() {
  // console.log(data);
  let total = 0;
  if (data.length > 0) {
    for (var j = 0; j < data.length; j++) {
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
function delItem(product) {
  var backup = data;
  var retVal = confirm("Do you want to delete ?");
  index = findProductInCart(data, product);
  // console.log(data);
  if (retVal == true) {
    if (index !== -1) {
      data.splice(index, 1);
    }
    localStorage.removeItem('CART');
    localStorage.setItem('CART', JSON.stringify(backup));
    table.removeChild();
    showCart();
    return true;
  } else {
    return false;
  }

}

// 
window.onload = function () {
  showCart();
  showTotal();
}


