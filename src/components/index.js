// index.js
import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, likeHandler } from "./card.js";
import { openModal } from "./modal.js";

// @done: DOM узлы
const placesList = document.querySelector(".places__list");
const openEditProfile = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
const openAddProfile = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_type_new-card");
//Форма редактирования профиля
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.elements.name;
const descriptionInput = formEditProfile.elements.description;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
//Форма добавления карточки
const formNewPlace = document.forms["new-place"];
const placeNameInput = formNewPlace.elements["place-name"];
const linkInput = formNewPlace.elements.link;
//Попап картинки(карточки)
const imagePopup = document.querySelector(".popup_type_image");
const imageInPopup = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

// @done: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.append(createCard(item.name, item.link, deleteCard, likeHandler, openCard, item.name));
});

// @done: Обработчик события submit для отображения имени в форме
function handleFormSubmit(evt) {
  evt.preventDefault();
  const name = nameInput.value;
  const description = descriptionInput.value;
  profileTitle.textContent = name;
  profileDescription.textContent = description;
}

formEditProfile.addEventListener("submit", handleFormSubmit);

// @done: Обработчик события submit для формы добавления карточки
function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  const name = placeNameInput.value;
  const link = linkInput.value;
  const newCard = createCard(name, link, deleteCard, likeHandler, openCard, name);
  placesList.prepend(newCard);
  formNewPlace.reset();
}

formNewPlace.addEventListener("submit", handleNewPlaceSubmit);

// @done: Открываем попап
openEditProfile.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editPopup);
});

openAddProfile.addEventListener("click", () => {
  openModal(addPopup);
});

// @done: Функция открытия попапа карточки
function openCard(imageSrc, cardName) {
  openModal(imagePopup);
  imageInPopup.src = imageSrc;
  imagePopupCaption.textContent = cardName;
}