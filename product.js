// product.js
(() => {
  // ========== 1. Détails des produits ==========
  const products = [
    {
      id: 1,
      name: "Escarpins en léopard",
      price: 120,
      description: "Ces escarpins élégants en cuir beige...",
      size: "42, 43, 44, 45, 46",
      cut: "Talon haut, bout pointu",
      material: "Cuir véritable, semelle en caoutchouc",
      care: "Nettoyer avec un chiffon doux...",
      image: "images/escarpin.jpg"
    },
    {
      id: 2,
      name: "Sandales à talons hauts",
      price: 95,
      description: "Ces sandales à talons hauts sont parfaites...",
      size: "42, 43, 44, 45, 46",
      cut: "Talon de 10 cm, bout ouvert",
      material: "Similicuir, semelle en caoutchouc",
      care: "Essuyer avec un chiffon humide...",
      image: "images/Sandales.jpg"
    },
    {
      id: 3,
      name: "Chaussures à talon élégant",
      price: 135,
      description: "Offrant une élégance intemporelle...",
      size: "42, 43, 44, 45, 46",
      cut: "Talon haut, bout arrondi",
      material: "Cuir verni, semelle en cuir véritable",
      care: "Nettoyer avec un chiffon sec...",
      image: "images/sabots.jpg"
    },
    {
      id: 4,
      name: "Loafers en cuir souple",
      price: 110,
      description: "Ces loafers allient élégance décontractée...",
      size: "42, 43, 44, 45, 46",
      cut: "Slip-on style mocassin, bout arrondi",
      material: "Cuir lisse, semelle extérieure en caoutchouc antidérapant",
      care: "Nettoyer avec un chiffon légèrement humide...",
      image: "images/loafers.jpg"
    },
    {
      id: 5,
      name: "Bottines noires en cuir",
      price: 120,
      description: "Ces bottines noires en cuir pleine fleur...",
      size: "42, 43, 44, 45, 46",
      cut: "Talon bloc, bout rond",
      material: "Cuir pleine fleur, semelle extérieure en caoutchouc antidérapant",
      care: "Essuyer avec un chiffon doux...",
      image: "images/botinnesnoires.jpg"
    },
    {
      id: 6,
      name: "Bottines rouges en cuir verni",
      price: 125,
      description: "Ces bottines rouges en cuir verni...",
      size: "42, 43, 44, 45, 46",
      cut: "Talon bloc 6 cm, bout arrondi",
      material: "Cuir verni, semelle extérieure en caoutchouc antidérapant",
      care: "Nettoyer doucement avec un chiffon humide...",
      image: "images/botinnesrouges.jpg"
    },
    {
      id: 7,
      name: "Bottes marron en cuir grainé",
      price: 130,
      description: "Ces bottes marron en cuir grainé...",
      size: "42, 43, 44, 45, 46",
      cut: "Tige mi-mollet, talon compensé 5 cm, bout rond",
      material: "Cuir grainé, semelle extérieure en caoutchouc antidérapant",
      care: "Nettoyer avec une brosse à poils doux...",
      image: "images/bottesmarrons.jpg"
    },
    {
      id: 8,
      name: "Bottes noires en cuir lisse",
      price: 140,
      description: "Ces bottes noires en cuir lisse montantes...",
      size: "42, 43, 44, 45, 46",
      cut: "Tige haute jusqu’au genou, talon bloc 6 cm, bout rond",
      material: "Cuir lisse, semelle extérieure en caoutchouc antidérapant",
      care: "Essuyer avec un chiffon doux...",
      image: "images/bottes-noires.jpg"
    }
  ];

  // ========== 2. Affichage fiche produit ==========
function displayProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const selectedSize = urlParams.get('size') || ''; // récupère la taille sélectionnée si présente

  const product = products.find(p => p.id === productId);
  const target = document.getElementById('productDetails');

  if (!target) return;

  if (product) {
    // Création de l’HTML du menu déroulant des tailles
    const sizes = product.size.split(',').map(size => size.trim());
    let sizeOptions = sizes.map(size => `
      <option value="${size}" ${size === selectedSize ? 'selected' : ''}>${size}</option>
    `).join('');

    target.innerHTML = `
      <div class="product-detail-img">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-detail-content">
        <h3>${product.name}</h3>
        <p><strong>Prix:</strong> €${product.price}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <ul>
          <li><strong>Coupe:</strong> ${product.cut}</li>
          <li><strong>Matériaux:</strong> ${product.material}</li>
          <li><strong>Entretien:</strong> ${product.care}</li>
        </ul>

        <label for="sizeSelect"><strong>Choisir la taille :</strong></label>
        <select id="sizeSelect">
          ${sizeOptions}
        </select>

        <button id="addToCartBtn"
                data-name="${product.name}"
                data-price="${product.price}">
          Ajouter au panier
        </button>
      </div>
    `;

    const addButton = document.getElementById('addToCartBtn');
    addButton.addEventListener('click', () => {
      const name = addButton.dataset.name;
      const price = parseFloat(addButton.dataset.price);
      const size = document.getElementById('sizeSelect').value;
      addToCart(name + " - Taille " + size, price); // ajoute la taille au nom du produit
    });

  } else {
    target.innerHTML = "<p>Produit non trouvé.</p>";
  }
}


  // ========== 3. Initialisation ==========
  document.addEventListener("DOMContentLoaded", () => {
    displayProduct();
    updateCartCount(); // vient de cart.js
  });
})();
