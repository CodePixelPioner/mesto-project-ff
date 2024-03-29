// @done: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @done: Функция создания карточки
export function createCard(name, link, deleteCard, likeHandler, openCard, cardName) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");

  //заполняем данные карточки
  card.querySelector(".card__image").src = link;
  card.querySelector(".card__title").textContent = name;

  //обработчик лайка
  likeButton.addEventListener("click", likeHandler);

  //обработчик открытия картинки
  const image = card.querySelector(".card__image");
  image.addEventListener("click", function () {
    openCard(image.src, cardName);
  });

  //обработчик клика для удаления карточки колбэком
  deleteButton.addEventListener("click", function () {
    deleteCard(card);
  });
  return card;
}

// @done: Функция удаления карточки
export function deleteCard(item) {
  item.remove();
}

// @done: Функция лайка
export function likeHandler(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
