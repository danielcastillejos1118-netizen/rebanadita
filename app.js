let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";
  let total = 0;

  // AGRUPAR PRODUCTOS
  const grouped = {};

  cart.forEach(item => {
    if (!grouped[item.name]) {
      grouped[item.name] = { price: item.price, qty: 1 };
    } else {
      grouped[item.name].qty++;
    }
    total += item.price;
  });

  // MOSTRAR AGRUPADOS
  for (const name in grouped) {
    const li = document.createElement("li");

    li.textContent = `${name}  x${grouped[name].qty}`;

    cartItems.appendChild(li);
  }

  cartTotal.textContent = total.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cart));
}


// DELEGACIÓN DE EVENTOS (LA CLAVE)
document.addEventListener("click", (e) => {

  /* BOTONES + */
  if (e.target.classList.contains("plus")) {
    const card = e.target.closest(".product-card");
    const qtySpan = card.querySelector(".qty");
    let qty = parseInt(qtySpan.textContent);
    qtySpan.textContent = qty + 1;
  }

  /* BOTONES - */
  if (e.target.classList.contains("minus")) {
    const card = e.target.closest(".product-card");
    const qtySpan = card.querySelector(".qty");
    let qty = parseInt(qtySpan.textContent);
    if (qty > 1) qtySpan.textContent = qty - 1;
  }

  /* AGREGAR AL CARRITO */
  if (e.target.classList.contains("add-btn")) {
    const card = e.target.closest(".product-card");
    const qty = parseInt(card.querySelector(".qty").textContent);
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    for (let i = 0; i < qty; i++) {
      cart.push({ name, price });
    }

    card.querySelector(".qty").textContent = 1;
    renderCart();
  }
});

/* BOTÓN PAGAR */
document.addEventListener("click", (e) => {
  if (e.target.id === "pay-btn") {

    if (cart.length === 0) {
      alert("🛒 Tu carrito está vacío");
      return;
    }

    const payment = document.querySelector('input[name="payment"]:checked');
    if (!payment) {
      alert("Selecciona una forma de pago");
      return;
    }

    const total = cart.reduce((t, i) => t + i.price, 0);

    alert(
      `✅ Pedido confirmado\n\n` +
      `Método de pago: ${payment.value}\n` +
      `Total: $${total}`
    );

    cart = [];
    localStorage.removeItem("cart");
    renderCart();
  }
});

// Render inicial
renderCart();
// Animar botón pagar si hay productos
function updatePayButton() {
  const payBtn = document.getElementById("pay-btn");
  if (!payBtn) return;

  if (cart.length > 0) {
    payBtn.classList.add("attention");
  } else {
    payBtn.classList.remove("attention");
  }
}

// Llama al actualizar carrito
const originalRender = renderCart;
renderCart = function () {
  originalRender();
  updatePayButton();
};

