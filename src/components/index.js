// index.js
import '../pages/index.css'; //импорт главного файла стилей
import { initialCards } from './cards.js';
import { createCard, deleteCard, likeHandler } from './card.js';

// @todo: DOM узлы
const content = document.querySelector('.content');
const placesList = document.querySelector('.places__list');

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    placesList.append(createCard(item.name, item.link, deleteCard, likeHandler));
  });
  





