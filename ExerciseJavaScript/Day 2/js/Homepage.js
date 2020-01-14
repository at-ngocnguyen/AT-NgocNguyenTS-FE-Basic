var products = [
  {
    id: 1,
    name: "abc",
    img: './img/anh1.jpg',
    price: 165,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 2,
    name: "cd",
    img: './img/anh2.jpg',
    price: 165,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 3,
    name: "ef",
    img: './img/anh3.jpg',
    price: 165,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
]
//loop and get object from array products
products.forEach(getItem);

function getItem(item, index) {
  var render = document.getElementById("js-list-product");
  //style div parent
  var div1 = document.createElement('div');
  div1.setAttribute('class', 'content');
  //style img
  var img = document.createElement('img');
  img.setAttribute('src', item.img)
  //style div-content
  var div2 = document.createElement('div');
  div2.setAttribute('class', 'content_item');
  var h3 = document.createElement('h3');
  h3.innerHTML = item.name;
  var p = document.createElement('p');
  p.innerHTML = item.description;
  //button
  var button = document.createElement('button');
  button.setAttribute('class', 'js-button-addtocart btn-addtocart');
  button.innerHTML = 'Add to Cart';
  button.onclick = function () { addCart(item); }

  //structure content
  div2.appendChild(h3);
  div2.appendChild(p);
  div1.appendChild(img);
  div1.appendChild(div2);
  div1.appendChild(button);
  render.appendChild(div1);
}
//Add to cart
function addCart(products) {
  console.log(products);
  var data = JSON.parse(localStorage.getItem('CART'))
  var cartItem = data ? data : [];
  var cart = cartItem;
  var count = 1;
  var index = findProductInCart(cart, products);
  if (index !== -1) {
    cart[index].count += count;
  } else {
    cart.push({
      products,
      count
    });
  }
  // item.disabled = true;
  localStorage.setItem('CART', JSON.stringify(cart));
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
