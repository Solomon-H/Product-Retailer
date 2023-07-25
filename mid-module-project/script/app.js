
function generateProductCards(products) {
  const productCardsContainer = document.getElementById('product-cards');
  productCardsContainer.innerText = "";

  for (let i = 0; i < products.length; i++) {
    let product = products[i]

    // Create card element article
    const cardContainer = document.createElement('article');
    cardContainer.classList.add('product-card');

    // Create card content div
    const cardContent = `
        <div class="sku">${product.productSku}</div>
        <div class="price">$${product.price.toFixed(2)}</div>
        <div class="product-name action">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-image">
           <img src="${product.imageName}" alt="Product Image"> </div>
        <div class="cart">
           <i class="fa-solid fa-cart-plus icon action" title="Add item to cart"></i>
        </div> 
      `;

    cardContainer.innerHTML = cardContent;
    let productName = cardContainer.querySelector('.product-name');
    productName.setAttribute('data-id', i + 1);

    // Add event listener to shopping cart icon
    const cartIcon = cardContainer.querySelector('.fa-cart-plus');
    cartIcon.addEventListener('click', () => {
      window.alert(`Added ${product.name} to the cart`);
    });

    // Append the card to the container
    productCardsContainer.appendChild(cardContainer);
  }
}

// Call the generateProductCards()
let products = productService.getProducts();
generateProductCards(products);

function searchProducts(event) {
  let allProducts = productService.getProducts();
  // console.log(typeof products);
  let searchTerm = event.target.value.toLowerCase();
  // searchTerm = searchTerm.toLowerCase();
  let filterProducts = allProducts.filter((product) => {
    const lowercaseName = product.name.toLowerCase();
    const lowercaseDescription = product.description.toLowerCase();
    return (lowercaseName.includes(searchTerm) || lowercaseDescription.includes(searchTerm));
  });

  // console.log(filterProducts);
  generateProductCards(filterProducts);
}
const searchBox = document.querySelector('#search-box');
searchBox.addEventListener('keyup', searchProducts);




//*************************************** */
// function generateProductCards(products) {
//   const container = document.getElementById('product-cards');
//   container.innerText = "";

//   productService.allProducts.forEach((product) => {
//     //create element
//     const article = document.createElement('article');
//     article.classList.add('product-card');

//     const sku = document.createElement('div');
//     sku.classList.add('sku');
//     sku.innerText = product.productSku;

//     const price = document.createElement('div');
//     price.classList.add('price');
//     price.innerText = '$' + product.price.toFixed(2);

//     const productName = document.createElement('div');
//     productName.setAttribute('data-id', product.productId);
//     productName.innerText = product.name;

//     const productImage = document.createElement('div');
//     productImage.classList.add('product-image');

//     const image = document.createElement('img');
//     image.src = product.imageName;

//     const cart = document.createElement('div');
//     cart.classList.add('cart');

//     const cartIcon = document.createElement('i');
//     cartIcon.classList.add('fa-solid', 'fa-cart-plus', 'icon', 'action');
//     cartIcon.setAttribute('title', 'Add item to cart');

//     // add Event listener
//     productName.addEventListener('click', (event) => {
//       const productId = event.currentTarget.getAttribute('data-id');
//       const clickedProduct = productService.allProducts.find(
//         (product) => product.productId === parseInt(productId)
//       );
//       window.alert(clickedProduct.description);
//     });

//     cartIcon.addEventListener('click', () => {
//       window.alert(`Item '${product.name}' added to the cart.`);
//     });

//     //appending
//     productImage.appendChild(image);
//     cart.appendChild(cartIcon);

//     article.appendChild(sku);
//     article.appendChild(price);
//     article.appendChild(productName);
//     article.appendChild(productImage);
//     article.appendChild(cart);
//     container.appendChild(article);
//   });
// }

// // Call the function
// let products = productService.getProducts();
// generateProductCards(products);

// //search function
// function searchProducts(event) {
//   // console.log(event.target);
//   let allProducts = productService.getProducts();
//   let searchTerm = event.target.value.toLowerCase();

//   let filterProducts = allProducts.filter((product) => {
//     const lowercaseName = product.name.toLowerCase();
//     const lowercaseDescription = product.description.toLowerCase();
//     return (lowercaseName.includes(searchTerm) || lowercaseDescription.includes(searchTerm));
//   });

//   generateProductCards(filterProducts);
// }

// const searchBox = document.getElementById('search-box');
// searchBox.addEventListener('keyup', searchProducts);

//******************************

