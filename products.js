allProducts = [
  {
    name: "Classic White Tee",
    color: "White",
    category: "T-shirt",
    price: 24.99,
    description: "Simplicity meets style with our Modern Minimalist Tee",
    image: "products_images/tshirts/whitet.jpg",
  },
  {
    name: "Heather Gray Tee",
    color: "Heather Gray",
    category: "T-shirt",
    price: 25.99,
    description:
      "A versatile heather gray shade that resonates with contemporary fashion",
    image: "products_images/tshirts/grayt.jpg",
  },
  {
    name: "Monochrome Tee",
    color: "Black",
    category: "T-shirt",
    price: 27.99,
    description: "Deep black hue and contemporary silhouette",
    image: "products_images/tshirts/blackt.jpg",
  },
  {
    name: "Classic Navy Tee",
    color: "Navy Blue",
    category: "T-shirt",
    price: 29.99,
    description:
      "Elevate your style with our navy blue classic tee. Timeless design meets contemporary fashion.",
    image: "products_images/tshirts/navyt.jpg",
  },
  {
    name: "Subtle Green Tee",
    color: "Green",
    category: "T-shirt",
    price: 26.99,
    description: "A refreshing hue that complements your modern lifestyle.",
    image: "products_images/tshirts/greent.jpg",
  },
  {
    name: "Vibrant Red Tee",
    color: "Red",
    category: "T-shirt",
    price: 23.99,
    description:
      "Unleash your confidence with this bold addition to your collection.",
    image: "products_images/tshirts/redt.jpg",
  },
  {
    name: "Sky Comfort Tee",
    color: "Sky blue",
    category: "T-shirt",
    price: 25.99,
    description:
      "The perfect balance of style and sky for your everyday adventures.",
    image: "products_images/tshirts/skyt.jpg",
  },
];

// PRODUCT SECTIONS
// T SHIRT SECTION
// FILTERING OUT T SHIRTS ONLY
const tShirts = allProducts.filter((product) => product.category === "T-shirt");
// CREATING THE PRODUCT CARDS AND ADDING TO T SHIRT SECTION
const showTshirt = (total) => {
  tShirtCatalogue = document.getElementById("tshirt-section");
  tShirtCatalogue.innerHTML = "";
  tShirts.slice(0, total).forEach((product) => {
    const productCardTemplate = `
    <div class="bg-white w-full shadow-lg rounded-lg hover:scale-[1.003] duration-300 flex flex-col items-center p-2">
      <img class="rounded-lg mb-4 w-full h-[300px] object-cover" src="${product.image}" alt="PIC" />
      <div class="text-center space-y-2 px-4 w-full">
        <h3 class="text-lg sm:text-xl font-medium">${product.name}</h3>
        <p class="text-gray-500 max-w-lg text-sm sm:text-base h-16 lg:h-12">${product.description}</p>
        <div class="flex items-center justify-between w-full py-2">
          <span class="text-gray-500 text-xl">$ ${product.price}</span>
          <button onClick="addToCartButton()" class="border-accent border-2 text-accent font-semibold hover:bg-accent hover:text-white duration-300 px-2 py-2 rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  `;
    tShirtCatalogue.innerHTML += productCardTemplate;
  });
  const remainingProducts = tShirts.length - total;
  if (remainingProducts > 0) {
    document.getElementById("btn-seemore-tshirt").style.display = "block";
  } else {
    document.getElementById("btn-seemore-tshirt").style.display = "none";
  }
};
let countOfTShirtShown = 3;
showTshirt(countOfTShirtShown);
document.getElementById("btn-seemore-tshirt").addEventListener("click", () => {
  countOfTShirtShown += 3;
  showTshirt(countOfTShirtShown);
});
