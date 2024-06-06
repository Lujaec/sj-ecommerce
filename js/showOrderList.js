import { allProducts } from "./allProduct.js";
import { orderList } from "./allOrder.js";

function renderOrderList() {
  // 주문 목록을 표시할 컨테이너 요소를 가져옴.
  const ordersContainer = document.getElementById("ordersContainer");

  // 이전에 표시된 목록을 지우고 새 목록을 생성하기 위해 컨테이너를 비움.
  ordersContainer.innerHTML = ""; // 기존 목록 초기화

  // 주문 목록을 반복하며 각 주문을 화면에 표시.
  orderList.forEach((order) => {
    // 해당 주문에 대한 제품을 찾음.
    const product = allProducts.find((p) => p.productId === order.productId);

    // 제품이 존재하는 경우에만 주문을 화면에 표시.
    if (product) {
      // 주문 항목을 위한 새로운 요소를 생성.
      const orderElement = document.createElement("div");
      orderElement.className = "orderItem";

      // 이미지를 표시할 컨테이너를 생성하고 이미지를 추가.
      const imageContainer = document.createElement("div");
      imageContainer.className = "imageContainer";
      imageContainer.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width:100px; height:100px;">`;

      // 텍스트를 표시할 컨테이너를 생성하고 주문 정보를 추가.
      const textContainer = document.createElement("div");
      textContainer.className = "textContainer";
      textContainer.innerHTML = `
        <h2>${product.name}</h2>
        <p>가격: ${product.price}</p>
        <p>수량: ${order.quantity}</p>
        <p>합계: ${calculateTotalPrice(product.price, order.quantity)}</p>
      `;

      // 이미지 컨테이너와 텍스트 컨테이너를 주문 항목 요소에 추가.
      orderElement.appendChild(imageContainer);
      orderElement.appendChild(textContainer);

      // 주문 항목 요소를 주문 목록 컨테이너에 추가.
      ordersContainer.appendChild(orderElement);
    }
  });
}

function calculateTotalPrice(price, quantity) {
  // 가격에서 'KRW'를 제거하고 정수로 변환
  const priceNumber = parseInt(
    price.replace(/KRW\s/, "").replace(/,/g, ""),
    10
  );
  // 계산된 총액을 로캘 문자열로 포매팅하여 반환
  const formattedTotal = (priceNumber * quantity).toLocaleString();
  return `KRW ${formattedTotal}`;
}

document.addEventListener("DOMContentLoaded", renderOrderList);
