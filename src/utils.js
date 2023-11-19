export function reduceProductName(title){
  const lengthMax = 30;
  return title.length > lengthMax ? title.substring(0, lengthMax) + "..." : title;
}