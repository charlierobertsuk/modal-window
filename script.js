'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`); // querySelector only selects the first one
const btnOpenModal = document.querySelectorAll(`.show-modal`);
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

//console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// e (event) is the object of what key was pressed
document.addEventListener(`keydown`, function (e) {
  console.log(e.key);
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) closeModal();
});
