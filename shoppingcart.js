cartArray = [];

// GIVING FUNCTIONALITY TO ADD TO CART BUTTON
const addToCartButton = (target) => {
  const nameOfProduct =
    target.parentElement.parentElement.childNodes[1].innerText;
  const priceOfProduct = parseFloat(
    target.parentElement.childNodes[1].innerText.split(" ")[1]
  );
  const imagePathOfProduct =
    target.parentElement.parentElement.parentElement.childNodes[1].src;

  const existingCartItem = cartArray.find(
    (item) => item.name === nameOfProduct
  );

  if (existingCartItem) {
    existingCartItem.count++;
  } else {
    cartArray.push({
      name: nameOfProduct,
      price: priceOfProduct,
      path: imagePathOfProduct,
      count: 1,
    });
  }
  updateCartItemNotification();
  console.log(cartArray);
};

// UPDATE SHOPPING CART NOTIFICATION COUNTER
const updateCartItemNotification = () => {
  document.getElementById("shoppingCartNotificationCounter").innerText =
    cartArray.reduce((sum, current) => sum + current.count, 0).toString();
};
