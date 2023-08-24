cartArray = [];

// GIVING FUNCTIONALITY TO ADD TO CART BUTTON
const addToCartButton = (target) => {
  const nameOfProduct =
    target.parentElement.parentElement.childNodes[1].innerText;
  const priceOfProduct =
    target.parentElement.childNodes[1].innerText.split(" ")[1];
  const imagePathOfProduct =
    target.parentElement.parentElement.parentElement.childNodes[1].src;

  // CHECKING WHETHER ITEM IS ALREADY ADDED TO CART
  //   IF ITEM IS SELECTED, THEN ADJUST THE COUNT
  let itemAlreadySelected = false;
  for (item of cartArray) {
    if (item.name === nameOfProduct) {
      itemAlreadySelected = true;
      item.count++;
      break;
    }
  }
  //   IF ITEM IS NOT ALREADY SELECTED, THEN ADD IT CART
  if (!itemAlreadySelected) {
    cartArray.push({
      name: nameOfProduct,
      price: priceOfProduct,
      path: imagePathOfProduct,
      count: 1,
    });
  }
  updateCartItemNot();
};

// UPDATE SHOPPING CART NOTIFICATION COUNTER
const updateCartItemNot = () => {
  document.getElementById("shoppingCartNotificationCounter").innerText =
    cartArray.reduce((sum, current) => sum + current.count, 0).toString();
};
