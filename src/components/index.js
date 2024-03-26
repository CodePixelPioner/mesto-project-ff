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