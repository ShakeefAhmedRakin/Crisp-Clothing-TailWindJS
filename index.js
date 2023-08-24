allProducts = [
  {
    name: "Classic White T-Shirt",
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
    name: "Monochrome Tee",
    color: "Black",
    category: "T-shirt",
    price: 27.99,
    description: "Simplicity meets style with our Modern Minimalist Tee",
    image: "products_images/tshirts/whitet.jpg",
  },
  {
    name: "Monochrome Tee",
    color: "Black",
    category: "T-shirt",
    price: 27.99,
    description: "Simplicity meets style with our Modern Minimalist Tee",
    image: "products_images/tshirts/whitet.jpg",
  },
  {
    name: "Monochrome Tee",
    color: "Black",
    category: "T-shirt",
    price: 27.99,
    description: "Simplicity meets style with our Modern Minimalist Tee",
    image: "products_images/tshirts/whitet.jpg",
  },
];

// PRODUCT SECTIONS
// T SHIRT SECTION
// FILTERING OUT T SHIRTS ONLY
const tShirts = allProducts.filter((product) => product.category === "T-shirt");
// CREATING THE PRODUCT CARDS AND ADDING TO T SHIRT SECTION
function showTshirt(count) {
  tShirtCatalogue = document.getElementById("tshirt-section");
  tShirts.forEach((product) => {
    const productCardTemplate = `
    <div class="bg-white w-fit shadow-lg rounded-lg hover:scale-[1.003] duration-300 flex flex-col items-center p-2">
      <img class="rounded-lg mb-4 w-[500px]" src="${product.image}" alt="" />
      <div class="text-center space-y-2 px-4 w-full">
        <h3 class="text-lg sm:text-xl font-medium">${product.name}</h3>
        <p class="text-gray-500 max-w-lg text-sm sm:text-base h-12 sm:h-16">${product.description}</p>
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
}

showTshirt(3);
