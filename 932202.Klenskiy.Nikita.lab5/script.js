const texts = {
  1: "Новость 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!",
  2: "Новость 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, alias.",
  3: "Новость 3: Пусто :D"
};
const headers = {
  1: "Новость 1",
  2: "Новость 2",
  3: "Новость 3"
};
const modalWrapper = document.getElementById('modal__wrapper');
const modalText = document.getElementById('modal__window__text');
const modalh1 = document.getElementById('modal__window__h1');
const btn1 = document.getElementById('btn__1');
const buttons = document.querySelectorAll('button[data-id]');

function openModal(event) {
  const id = event.target.getAttribute('data-id');
  modalText.textContent = texts[id];
  modalh1.textContent = headers[id];
  modalWrapper.style.display = 'flex';
}

function closeModal() {
  modalWrapper.style.display = 'none';
}

    buttons.forEach(button => {
      button.addEventListener('click', openModal);
    });

modalWrapper.addEventListener('click', function(event) {
  if (event.target === modalWrapper) {
    closeModal();
  }
});
