var data = JSON.parse(localStorage.getItem('CART'))

if (data) { 
  document.getElementById("cart").innerHTML = "  " + data.length; 
}else{
  document.getElementById("cart").innerHTML = "  " + 0; 
}
