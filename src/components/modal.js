const closeButtons = document.querySelectorAll('.popup__close');

// @done: Плавное открытие попапа
export function openModal(popup) {
  popup.classList.add('popup_is-animated');
  setTimeout(() => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalEsc);
  popup.addEventListener('mousedown', closeModalOverlay);
  }, 10);
};

// @done: Плавное закрытие попапа
function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  setTimeout(() => {
    popup.classList.remove('popup_is-animated');
    document.removeEventListener('keydown', closeModalEsc);
    popup.removeEventListener('mousedown', closeModalOverlay);
    }, 600);
};

// @done: Закрываем попапа по клику(все крестики)
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closeModal(popup);
  })
});

//@done: Функция закрытия попапа нажатием на Esc
function closeModalEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened'); // находим открытый попап
    if (openedPopup) {
      closeModal(openedPopup); // закрываем его
    }
  }
};

//@done: Функция закрытия попапа нажатием оверлей
function closeModalOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
};