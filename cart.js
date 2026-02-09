let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart");
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function buyOnWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Hello, I want to order:%0A%0A";
  let total = 0;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ₹${item.price}%0A`;
    total += item.price;
  });

  message += `%0A*Total: ₹${total}*`;

  // 👉 CHANGE THIS NUMBER
  let phoneNumber = "91xxxxxxxxxx"; // include country code

  let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.location.href = whatsappURL;
}

updateCartCount();
