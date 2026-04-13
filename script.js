let count = 0;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart-count").textContent = cart.length;

  showPopup();
}
function goToCart() {
  window.location.href = "cart.html";
}
