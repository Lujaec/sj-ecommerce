import { allProducts } from "./allProduct.js";

document.getElementById("loadMore").addEventListener("click", function () {
  const searchParam = getSearchParameter();
  renderProducts(6, searchParam);
});

let currentIndex = 0; // 현재 페이지에 보여준 상품의 인덱스

function renderProducts(count, filter = "") {
  const productContent = document.getElementById("product-all-content");
  productContent.innerHTML = ""; // 초기화

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const maxIndex = currentIndex + count;

  for (let i = 0; i < maxIndex && i < filteredProducts.length; i++) {
    const product = filteredProducts[i];
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
  }
  currentIndex += count; // 인덱스 업데이트
}

function getSearchParameter() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get("search") || "";
}

function loadInitialProducts() {
  const searchParam = getSearchParameter();
  document.getElementById("searchInput").value = searchParam;
  renderProducts(6, searchParam);
}

window.onload = loadInitialProducts;
