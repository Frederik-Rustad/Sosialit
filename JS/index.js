console.log('index.js loaded');

const store = [
  {
    product: "Apple",
    price: 1.99,
    quantity: 5
  },

  {
    product: "Banana",
    price: 0.99,
    quantity: 12
  },

  {
    product: "Watermelon",
    price: 3.99,
    quantity: 16
  } 
];

function findProduct(product) {
  return product.product === 'Apple';
}
const search = store.findIndex(findProduct);

if (search !== -1) {
  console.log(`${search.product} found at index ${search}`);
} else {
  console.log("Product not found");
}

