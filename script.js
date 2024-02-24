
const adicionaItem = () => {
  const newArticle = document.createElement("article");
  newArticle.setAttribute("class", "item");
  newArticle.setAttribute("onclick", "removeItem(event)");
  newArticle.innerHTML = "Olá, devs! Bora praticar DOM II";
  container.appendChild(newArticle);
  console.log(newArticle);
};

function removeItem(event) {
  event.target.remove();
}
