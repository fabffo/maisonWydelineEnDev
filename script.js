// Variables pour gérer le panier
let cart = [];
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');

// Fonction pour mettre à jour le panier affiché
function updateCart() {
    cartItems.innerHTML = ''; // Vider les éléments du panier
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = `€${total}`;
    cartCount.textContent = cart.length;
}

// Fonction pour ajouter un produit au panier
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Fonction pour ouvrir le modal du panier
document.getElementById('viewCart').addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Fonction pour fermer le modal
closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Ajouter les produits au panier
const addButtons = document.querySelectorAll('.addToCart');
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
    });
});
