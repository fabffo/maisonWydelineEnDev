// cart.js

// === Fonctions de gestion du panier ===

// Récupère le panier depuis localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Sauvegarde le panier dans localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Ajoute un produit au panier
function addToCart(name, price) {
  let cart = getCart();
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price: parseFloat(price), quantity: 1 });
  }

  saveCart(cart);
  updateCartCount();
  alert(`${name} a été ajouté au panier.`);
}

// Vide le panier
function clearCart() {
 localStorage.removeItem('cart');
  location.reload();
}

// Met à jour le compteur
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const counter = document.getElementById('cartCount');
  if (counter) counter.textContent = count;
}
  
