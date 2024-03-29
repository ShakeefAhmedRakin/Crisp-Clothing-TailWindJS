allProducts = [
  {
    name: "Classic White Tee",
    color: "White",
    category: "T-shirt",
    price: 24.99,
    description: "Simplicity meets style with our Modern Minimalist Tee",
    image: "products_images/tshirts/whitet-min.jpg",
  },
  {
    name: "Heather Gray Tee",
    color: "Heather Gray",
    category: "T-shirt",
    price: 25.99,
    description:
      "A versatile heather gray shade that resonates with contemporary fashion",
    image: "products_images/tshirts/grayt-min.jpg",
  },
  {
    name: "Monochrome Tee",
    color: "Black",
    category: "T-shirt",
    price: 27.99,
    description: "Deep black hue and contemporary silhouette",
    image: "products_images/tshirts/blackt-min.jpg",
  },
  {
    name: "Classic Navy Tee",
    color: "Navy Blue",
    category: "T-shirt",
    price: 29.99,
    description: "Elevate your style with our navy blue classic tee",
    image: "products_images/tshirts/navyt-min.jpg",
  },
  {
    name: "Subtle Green Tee",
    color: "Green",
    category: "T-shirt",
    price: 26.99,
    description: "A refreshing hue that complements your modern lifestyle",
    image: "products_images/tshirts/greent-min.jpg",
  },
  {
    name: "Vibrant Red Tee",
    color: "Red",
    category: "T-shirt",
    price: 23.99,
    description:
      "Unleash your confidence with this bold addition to your collection",
    image: "products_images/tshirts/redt-min.jpg",
  },
  {
    name: "Sky Comfort Tee",
    color: "Blue",
    category: "T-shirt",
    price: 22.99,
    description: "Perfect balance of style and sky",
    image: "products_images/tshirts/bluet-min.jpg",
  },
  {
    name: "Salmon Elegance Tee",
    color: "Salmon Pink",
    category: "T-shirt",
    price: 26.99,
    description: "A delicate salmon hue that embodies grace and sophistication",
    image: "products_images/tshirts/salmont-min.jpg",
  },
];

// ----------------------- T SHIRT SECTION --------------------------------------------
tShirtCatalogue = document.getElementById("tshirt-section");
seeMoreButtonTshirt = document.getElementById("btn-seemore-tshirt");
// FILTERING OUT T SHIRTS ONLY
const tShirts = allProducts.filter((product) => product.category === "T-shirt");
// CREATING THE PRODUCT CARDS AND ADDING TO T SHIRT SECTION
const renderProductCards = (total) => {
  tShirtCatalogue.innerHTML = "";
  tShirts.slice(0, total).forEach((product) => {
    const productCardTemplate = `
    <div class="bg-white w-full shadow-lg rounded-lg hover:scale-[1.003] duration-300 flex flex-col items-center p-2">
  <div class="relative overflow-hidden rounded-lg mb-4 w-full h-[300px]">
    <img class="absolute inset-0 w-full h-full object-cover duration-300 hover:scale-[1.20]" src="${product.image}" alt="" />
  </div>
  <div class="text-center space-y-2 px-4 w-full">
    <h3 class="text-lg sm:text-xl font-medium">${product.name}</h3>
    <p class="text-gray-500 max-w-lg text-sm sm:text-base h-16 xl:h-12">${product.description}</p>
    
    <!-- Size Selection -->
    <div class="flex items-center justify-end w-full py-2">

      <div class="flex space-x-2">
        <input type="radio" name="size-${product.name}" value="S" class="mr-1">
        <label class="text-gray-500">S</label>
        <input type="radio" name="size-${product.name}" value="M" class="mr-1">
        <label class="text-gray-500">M</label>
        <input type="radio" name="size-${product.name}" value="L" class="mr-1">
        <label class="text-gray-500">L</label>
        <input type="radio" name="size-${product.name}" value="XL" class="mr-1">
        <label class="text-gray-500">XL</label>
      </div>
    </div>
    
    <div class="flex items-center justify-between w-full py-2">
      <span class="text-gray-500 text-xl">$ ${product.price}</span>
      <button onClick="addToCartButton(this)" class="border-accent border-2 text-accent font-semibold hover:bg-accent hover:text-white duration-300 px-2 py-2 rounded-md">
        ADD TO CART
      </button>
    </div>
  </div>
</div>

  `;
    tShirtCatalogue.innerHTML += productCardTemplate;
  });
  const remainingProducts = tShirts.length - total;

  seeMoreButtonTshirt.style.display = remainingProducts > 0 ? "block" : "none";
};

// SEE MORE BUTTON FUNCTIONALITY
if (screen.width >= 768 && screen.width < 1024) {
  stepSize = 4;
} else {
  stepSize = 3;
}
let countOfTShirtShown = stepSize;
renderProductCards(countOfTShirtShown);
seeMoreButtonTshirt.addEventListener("click", () => {
  countOfTShirtShown += stepSize;
  renderProductCards(countOfTShirtShown);
});
// -----------------------------------------------------------------------------------
