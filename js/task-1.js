
const categories = document.querySelector('#categories');

const items = categories.querySelectorAll('.item');
console.log(`Кількість категорій: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});
