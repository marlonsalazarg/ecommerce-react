export function reduceProductName(title){
  const lengthMax = 25;
  return title.length > lengthMax ? title.substring(0, lengthMax) + "..." : title;
}

export const totalPrice = (products) => {
  return Math.round(products.reduce((acc, product) => acc + product.price, 0) * 100) / 100;
}