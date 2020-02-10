var products = [
  {
    id: 1,
    name: 'GOLDEN WEDDING RINGS 18K PNJ DD00Y000737',
    img: './img/anh1.jpg',
    price: 400,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
  {
    id: 2,
    name: 'MEN RING 18K + RUBY PNJ RBXMY000598',
    img: './img/anh2.jpg',
    price: 1882,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
  {
    id: 3,
    name: 'MEN RING 18K + RUBY PNJ RBXMY33598',
    img: './img/anh3.jpg',
    price: 742,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
  {
    id: 4,
    name: 'GOLDEN RING 14K ',
    img: './img/anh4.jpg',
    price: 3535,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
  {
    id: 5,
    name: 'DIAMON MAN RING WITH GOLD 18K PNJ DDDDC000504',
    img: './img/anh5.jpg',
    price: 345,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
  {
    id: 6,
    name: 'GOLDEN RING WITH WAROVSKI PNJ SPRING COLOR ',
    img: './img/anh6.jpg',
    price: 975,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
  {
    id: 7,
    name: 'GOLDEN EARRING 14K WITH MOON STONE PNJ SPRING COLOR MOX',
    img: './img/anh7.jpg',
    price: 760,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
  {
    id: 8,
    name: 'GOLDEN EARRING 18K WITH RUBY STONE PNJ SPRING COLOR MOX',
    img: './img/anh8.jpg',
    price: 1298,
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna',
  },
]
//loop and get object from array products
function showItem() {
  products.forEach(getItem);
}

var data = JSON.parse(localStorage.getItem('CART'))
function getItem(item, index) {
  var render = document.getElementById('js-list-product');
  //style div parent
  var div1 = document.createElement('div');
  div1.setAttribute('class', 'card');
  //style img
  var img = document.createElement('img');
  img.setAttribute('src', item.img)
  //style div-content
  var div2 = document.createElement('div');
  div2.setAttribute('class', 'content_item');
  var h3 = document.createElement('h3');
  h3.innerHTML = item.name;
  var p = document.createElement('p');
  p.innerHTML = comMa(item.price) + '<sup>$</sup>';
  p.setAttribute('class', 'price');
  var p_des = document.createElement('p');
  p_des.innerHTML = item.description;
  //button
  var button = document.createElement('button');
  button.setAttribute('class', 'button');
  button.innerHTML = 'Add to Cart';
  button.addEventListener('click', function () { addCart(item) })
  //structure content
  div2.appendChild(h3);
  div2.appendChild(p);
  div2.appendChild(p_des);
  div1.appendChild(img);
  div1.appendChild(div2);
  div1.appendChild(button);
  render.appendChild(div1);
}
//Add to cart
function addCart(products) {
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
  document.getElementById('cart').innerHTML = '';
  localStorage.setItem('CART', JSON.stringify(cart));
  shownumber();
}
window.onload = function () {
  showItem();
}