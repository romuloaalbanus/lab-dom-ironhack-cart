// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector("quantity span");
  let subtotal = product.querySelector(".subtotal span");
  let newSubtotal = quantity * price;
  subtotal.innerText = newSubtotal;
  console.log("Calculating subtotal, yey!");
  return newSubtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  for (let i = 0; i < singleProduct.length; i++) {
    console.log(singleProduct[i]);
  }
  updateSubtotal(singleProduct[i]);
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  document
    .querySelectorAll(".product")
    .forEach((product) => (total += updateSubtotal(product)));
  //... your code goes here

  // ITERATION 3
  function calculateAll() {
    let totalSub = 0;
    let products = document.querySelectorAll(".product");
    products.forEach((product) => (totalSub += updateSubtotal(product)));
    let total = document.querySelector("#total-value span");
    total.innerText = totalSub;
    //... your code goes here
  }

  // ITERATION 4

  function removeProduct(event) {
    const target = event.currentTarget;
    console.log("The target in remove is:", target);
    //... your code goes here
  }

  // ITERATION 5

  function createProduct() {
    //... your code goes here
  }

  window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);

    //... your code goes here
  });
}
