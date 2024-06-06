import { allProducts, getRecomendProducts } from "./allProduct.js";

const bestProducts = allProducts.sort((a, b) => b.score - a.score).slice(0, 4);
const recommendProducts = getRecomendProducts(4);

function renderMainPageProduct() {
  renderBestProducts();
  renderRecommendProducts();
}

function renderBestProducts() {
  const productContent = document.getElementById("best-product-content");
  productContent.innerHTML = ""; // 기존 내용을 비우고 새로 시작

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

function renderRecommendProducts() {
  const productContent = document.getElementById("recommend-product-content");
  productContent.innerHTML = ""; // 초기화

  recommendProducts.forEach((product) => {
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

// 페이지 로드 시 상품 목록을 렌더링
window.onload = renderMainPageProduct;
