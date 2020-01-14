var data = JSON.parse(localStorage.getItem('CART'))
console.log(data.length);
document.getElementById("cart").innerHTML="  "+data.length;