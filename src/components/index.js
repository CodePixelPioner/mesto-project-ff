// index.js
import '../pages/index.css'; //импорт главного файла стилей
import { initialCards } from './cards.js';
import { createCard, deleteCard, likeHandler } from './card.js';
import { openModal } from './modal.js';

// @done: DOM узлы
const placesList = document.querySelector('.places__list');
const openEditProfile = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const openAddProfile = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_new-card');

// @done: Вывести карточки на страницу
initialCards.forEach((item) => {
    placesList.append(createCard(item.name, item.link, deleteCard, likeHandler));
  });


// @done: Открываем попап
openEditProfile.addEventListener('click', () => {
  openModal(editPopup);
});

openAddProfile.addEventListener('click', () => {
  openModal(addPopup);
});

//Форма редактирования профиля
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.elements.name;
const descriptionInput = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
//Форма добавления карточки
const formNewPlace = document.forms["new-place"];
const placeNameInput = formNewPlace.elements["place-name"];
const linkInput = formNewPlace.elements.link;

// @done: Обработчик события submit
function handleFormSubmit(evt) {
  evt.preventDefault();
  const name = nameInput.value;
  const description = descriptionInput.value;
  profileTitle.textContent = name;
  profileDescription.textContent = description;
}

formEditProfile.addEventListener('submit', handleFormSubmit);