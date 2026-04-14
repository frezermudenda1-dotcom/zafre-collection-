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

function addToCart(name, price) {
  // your existing cart logic here

  showNotification("Added to cart");
}
function showNotification(message) {
  const note = document.createElement("div");
  note.innerText = message;
  note.style.position = "fixed";
  note.style.bottom = "20px";
  note.style.left = "50%";
  note.style.transform = "translateX(-50%)";
  note.style.background = "black";
  note.style.color = "white";
  note.style.padding = "10px 20px";
  note.style.borderRadius = "10px";
  note.style.zIndex = "999";

  document.body.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 2000);
}
