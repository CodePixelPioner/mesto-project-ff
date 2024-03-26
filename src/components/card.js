// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: Функция создания карточки
export function createCard(name, link, deleteCard, likeHandler) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = card.querySelector('.card__delete-button');
    const likeButton = card.querySelector('.card__like-button');
    //заполняем данные карточки
    card.querySelector('.card__image').src = link;
    card.querySelector('.card__title').textContent = name;
    
    //обработчик лайка
    likeButton.addEventListener('click', likeHandler);

    //обработчик клика для удаления карточки колбэком
    deleteButton.addEventListener('click', function() {
    deleteCard(card)
    });
    return card;
  };

// @todo: Функция удаления карточки
export function deleteCard(item) {
    item.remove();
};

export function likeHandler(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
};