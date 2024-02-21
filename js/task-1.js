  const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);
  const categoryQuantity = category.querySelectorAll("ul > li").length;
  console.log(`Elements: ${categoryQuantity}`);
});
  
