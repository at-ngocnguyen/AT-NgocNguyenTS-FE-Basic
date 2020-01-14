var data = JSON.parse(localStorage.getItem('CART'))
var cartItem = data ? data : [];
var cart = cartItem;
var showCart = function () {
  data.forEach(getCart);
}
function getCart(item, index) {
  var product = item.products;
  // console.log("abc");
  //call tr element from DOM
  var table = document.getElementById("js-cart-item");
  var row = document.createElement('tr');
  //Create td
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  td2.innerHTML = product.name;
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  td4.innerHTML = product.price;
  var td5 = document.createElement('td');
  td5.innerHTML = product.price * item.count;
  var td6 = document.createElement('td');
  //Create Button sub and add count
  var buttonsub = document.createElement('button');
  buttonsub.innerHTML = "-";
  buttonsub.onClick = function () {
    console.log("abc")
  };
  var buttonadd = document.createElement('button');
  buttonadd.innerHTML = "+";
  buttonadd.onClick = function () {
    edit_count(product, "+");
  };
  var span = document.createElement('span');
  span.innerHTML = item.count;
  td3.appendChild(buttonsub);
  td3.appendChild(span);
  td3.appendChild(buttonadd);
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
  console.log(data);
  if (index !== -1) {
    data.splice(index, 1);
  }
  localStorage.setItem('CART', JSON.stringify(data));
}
function edit_count(product, desciption) {
  var count = 1;
  var index = findProductInCart(cart, products);
  if (desciption == "+") {
    count += 1;
  }
  else {
    count -= 1;
    if (count <= 0) {
      count = 1;
    }
  }
  if (index !== -1) {
    cart[index].count = count;
  } else {
    cart.push({
      product,
      count
    });
  }
  localStorage.setItem('CART', JSON.stringify(cart));

}
function findProductInCart(cart, products) {
  var index = -1;
  console.log(cart)
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


window.onload = showCart();