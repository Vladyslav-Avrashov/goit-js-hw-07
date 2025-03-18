const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
  const category = item.querySelector("h2");
  const elements = item.querySelectorAll("ul li");
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
