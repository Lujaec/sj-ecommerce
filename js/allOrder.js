export var orderList = JSON.parse(localStorage.getItem("orderList")) || [];

export function addToOrderList() {
  //상품 ID 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  var productId = parseInt(urlParams.get("productId"), 10);
  // 수량 입력 필드에서 수량 가져오기
  var quantity = document.getElementById("quantity").value;

  // orderList에 상품 ID와 수량 추가git
  orderList.push({ productId: productId, quantity: parseInt(quantity, 10) });

  localStorage.setItem("orderList", JSON.stringify(orderList));
}
