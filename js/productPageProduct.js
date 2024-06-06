import { allProducts, getRecomendProducts } from "./allProduct.js";

const bestProducts = getRecomendProducts(4);

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("productId"), 10);

  const product = allProducts.find((p) => p.productId === productId);
  if (product) {
    displayProductDetails(product);
  } else {
    console.error("Product not found!");
  }
});

function renderBestProducts() {
  const productContent = document.getElementById("best-product-content");
  productContent.innerHTML = ""; // 기존 내용을 비우고 새로 시작

  console.log(bestProducts);
  bestProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
              <a href="product.html?productId=${product.productId}">
                  <img src="${product.image}" />
              </a>
              <div class="product-detail">
                  <h3>${product.category}</h3>
                  <h2>${product.name}</h2>
                  <a href="#">장바구니 추가</a>
                  <p>${product.price}</p>
              </div>
          `;
    productContent.appendChild(productElement);
  });
}

function displayProductDetails(product) {
  document.querySelector(".product-name h2").textContent = product.name;
  document.querySelector(".product-price h3").textContent = product.price;
  document.querySelector(".product-description p").textContent =
    product.description;

  document.querySelector(
    ".product-meta p"
  ).textContent = `카테고리: ${product.category}`;
  document.querySelector(
    ".single-product .images-section .larg-img img"
  ).src = `${product.image}`;

  const detailDescriptionContainer = document.querySelector(
    ".product-long-description"
  );
  for (let i = 0; i < 3; ++i) {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
    <p>
              ${product.description.repeat(2)} 
    </p>
    <br>
          `;
    detailDescriptionContainer.appendChild(productElement);
  }

  renderBestProducts();
}
