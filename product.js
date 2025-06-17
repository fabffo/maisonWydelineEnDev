(() => {
    // ========== 1. Détails des produits ==========
    const products = [
        {
            id: 1,
            name: "Escarpins en léopard",
            price: "€120",
            description: "Ces escarpins élégants en cuir beige...",
            size: "36, 37, 38, 39, 40",
            cut: "Talon haut, bout pointu",
            material: "Cuir véritable, semelle en caoutchouc",
            care: "Nettoyer avec un chiffon doux...",
            image: "images/escarpin.jpg"
        },
        {
            id: 2,
            name: "Sandales à talons hauts",
            price: "€95",
            description: "Ces sandales à talons hauts sont parfaites...",
            size: "37, 38, 39",
            cut: "Talon de 10 cm, bout ouvert",
            material: "Similicuir, semelle en caoutchouc",
            care: "Essuyer avec un chiffon humide...",
            image: "images/Sandales.jpg"
        },
        {
            id: 3,
            name: "Chaussures à talon élégant",
            price: "€135",
            description: "Offrant une élégance intemporelle...",
            size: "36, 37, 38, 39, 40",
            cut: "Talon haut, bout arrondi",
            material: "Cuir verni, semelle en cuir véritable",
            care: "Nettoyer avec un chiffon sec...",
            image: "images/sabots.jpg"
        },
        {
            id: 4,
            name: "Loafers en cuir souple",
            price: "€110",
            description: "Ces loafers allient élégance décontractée...",
            size: "36, 37, 38, 39, 40",
            cut: "Slip-on style mocassin, bout arrondi",
            material: "Cuir lisse, semelle extérieure en caoutchouc antidérapant",
            care: "Nettoyer avec un chiffon légèrement humide...",
            image: "images/loafers.jpg"
        },
        {
            id: 5,
            name: "Bottines noires en cuir",
            price: "€120",
            description: "Ces bottines noires en cuir pleine fleur...",
            size: "36, 37, 38, 39, 40",
            cut: "Talon bloc, bout rond",
            material: "Cuir pleine fleur, semelle extérieure en caoutchouc antidérapant",
            care: "Essuyer avec un chiffon doux...",
            image: "images/botinnesnoires.jpg"
        },
        {
            id: 6,
            name: "Bottines rouges en cuir verni",
            price: "€125",
            description: "Ces bottines rouges en cuir verni...",
            size: "36, 37, 38, 39, 40",
            cut: "Talon bloc 6 cm, bout arrondi",
            material: "Cuir verni, semelle extérieure en caoutchouc antidérapant",
            care: "Nettoyer doucement avec un chiffon humide...",
            image: "images/botinnesrouges.jpg"
        },
        {
            id: 7,
            name: "Bottes marron en cuir grainé",
            price: "€130",
            description: "Ces bottes marron en cuir grainé...",
            size: "36, 37, 38, 39, 40",
            cut: "Tige mi-mollet, talon compensé 5 cm, bout rond",
            material: "Cuir grainé, semelle extérieure en caoutchouc antidérapant",
            care: "Nettoyer avec une brosse à poils doux...",
            image: "images/bottes-marron.jpg"
        },
        {
            id: 8,
            name: "Bottes noires en cuir lisse",
            price: "€140",
            description: "Ces bottes noires en cuir lisse montantes...",
            size: "36, 37, 38, 39, 40",
            cut: "Tige haute jusqu’au genou, talon bloc 6 cm, bout rond",
            material: "Cuir lisse, semelle extérieure en caoutchouc antidérapant",
            care: "Essuyer avec un chiffon doux...",
            image: "images/bottes-noires.jpg"
        }
    ];

    // ========== 2. Fonctions panier ==========

    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(name, price) {
        let cart = getCart();
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        saveCart(cart);
        updateCartCount();
        alert(`${name} a été ajouté au panier.`);
    }

    function clearCart() {
        localStorage.removeItem('cart');
        updateCartCount();
        alert("Le panier a été vidé.");
    }

    function updateCartCount() {
        const cart = getCart();
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const counter = document.getElementById('cartCount');
        if (counter) counter.textContent = count;
    }

    // ========== 3. Affichage fiche produit ==========

    function displayProduct() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);

        const target = document.getElementById('productDetails');

        if (!target) return;

        if (product) {
            target.innerHTML = `
                <div class="product-detail-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="product-detail-content">
                    <h3>${product.name}</h3>
                    <p><strong>Prix:</strong> ${product.price}</p>
                    <p><strong>Description:</strong> ${product.description}</p>
                    <ul>
                        <li><strong>Taille disponible:</strong> ${product.size}</li>
                        <li><strong>Coupe:</strong> ${product.cut}</li>
                        <li><strong>Matériaux:</strong> ${product.material}</li>
                        <li><strong>Entretien:</strong> ${product.care}</li>
                    </ul>
                    <button id="addToCartBtn"
                            data-name="${product.name}"
                            data-price="${product.price.slice(1)}">
                        Ajouter au panier
                    </button>
                </div>
            `;

            const addButton = document.getElementById('addToCartBtn');
            addButton.addEventListener('click', () => {
                const name = addButton.dataset.name;
                const price = parseFloat(addButton.dataset.price);
                addToCart(name, price);
            });
        } else {
            target.innerHTML = "<p>Produit non trouvé.</p>";
        }
    }

    // ========== 4. Initialisation une fois le DOM prêt ==========
    document.addEventListener("DOMContentLoaded", () => {
        displayProduct();
        updateCartCount();
    });

})();
