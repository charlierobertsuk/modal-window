'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`); // querySelector only selects the first one
const btnOpenModal = document.querySelectorAll(`.show-modal`);
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener(`click`, function () {
    //console.log(`clicked`);
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
  });

  btnCloseModal.addEventListener(`click`, function () {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
  });

  overlay.addEventListener(`click`, function () {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
  });
}
