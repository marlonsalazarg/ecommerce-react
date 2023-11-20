export function reduceProductName(title){
  const lengthMax = 25;
  return title.length > lengthMax ? title.substring(0, lengthMax) + "..." : title;
}