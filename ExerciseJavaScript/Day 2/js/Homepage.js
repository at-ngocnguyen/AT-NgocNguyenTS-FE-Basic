var products = [
  {
    id: 1,
    name: "GOLDEN WEDDING RINGS 18K PNJ DD00Y000737",
    img: './img/anh1.jpg',
    price: 400,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 2,
    name: "MEN RING 18K + RUBY PNJ RBXMY000598",
    img: './img/anh2.jpg',
    price: 1882,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 3,
    name: "MEN RING 18K + RUBY PNJ RBXMY33598",
    img: './img/anh3.jpg',
    price: 742,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 4,
    name: "GOLDEN RING 14K ",
    img: './img/anh4.jpg',
    price: 3535,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 5,
    name: "DIAMON MAN RING WITH GOLD 18K PNJ DDDDC000504",
    img: './img/anh5.jpg',
    price: 345,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 6,
    name: "GOLDEN RING WITH WAROVSKI PNJ SPRING COLOR ",
    img: './img/anh6.jpg',
    price: 975,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 7,
    name: "GOLDEN EARRING 14K WITH MOON STONE PNJ SPRING COLOR MOX",
    img: './img/anh7.jpg',
    price: 760,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
  {
    id: 8,
    name: "BÔNG TAI VÀNG 18K ĐÍNH ĐÁ RUBY PNJ SẮC XUÂN RBXMY",
    img: './img/anh8.jpg',
    price: 1298,
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt t labore et dolore magna",
  },
]
//loop and get object from array products
products.forEach(getItem);

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
  p.innerHTML = Comma(item.price) + '<sup>$</sup>';
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
  // console.log(products);
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
