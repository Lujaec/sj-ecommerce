import { addToOrderList } from "./allOrder.js";

document.addEventListener("DOMContentLoaded", () => {
  const purchaseButton = document.querySelector('input[name="purchase"]');
  if (purchaseButton) {
    purchaseButton.addEventListener("click", loadPurchaseModal);
  }

  const closeButton = document.querySelector("#purchaseCompleteModal button");
  if (closeButton) {
    closeButton.addEventListener("click", closePurchaseModal);
  }
});

export function loadPurchaseModal() {
  addToOrderList();
  document.getElementById("purchaseCompleteModal").style.display = "block";
}

export function closePurchaseModal() {
  document.getElementById("purchaseCompleteModal").style.display = "none";
}
