const form = document.querySelector(".form");
const profile = document.querySelector(".profile");
//const saveButton = form.querySelector(".form__button");

const profileName = profile.querySelector(".profile__name");
const profileTitle = profile.querySelector(".profile__title");
const inputName = form.querySelector(".form__input[name='name']");
const inputTitle = form.querySelector(".form__input[name='title']");

const editProfileButton = profile.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close-button");

//const cards = document.querySelector(".cards");
//const likesButtons = cards.querySelectorAll(".card__like-button");

function openForm() {
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
  popup.classList.add("popup_opened");
}

function closeForm() {
  popup.classList.remove("popup_opened");
}

function formHandler(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  closeForm();
}

//for (let i = 0; i < likesButtons.length; i++) {
//const likeButton = likesButtons[i];
//function toggleLike() {
// likeButton.classList.toggle("card__like-button_active");
//}
// likeButton.addEventListener("click", toggleLike);
//}

editProfileButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
//saveButton.addEventListener("click", closeForm);
form.addEventListener("submit", formHandler);

/////////////////
//Declarations//
////////////////

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const addCardModal = document.querySelector(".popup_type_add-card");
const addCardModalCloseButton = document.querySelector(".popup_close_add-card");
const profileModal = document.querySelector(".popup_type_profile");
const addCardButton = document.querySelector(".profile__add-button");

editProfileButton.addEventListener("click", () => toggleModalWindow(popup));
closeButton.addEventListener("click", () => toggleModalWindow(popup));
addCardModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(addCardModal)
);
addCardButton.addEventListener("click", () => toggleModalWindow(addCardModal));

//function for open & close popups
function toggleModalWindow(modalWindow) {
  if (!modalWindow.classList.contains("popup_is")) {
    profileModalFormTitle.value = profileTitle.textContent;
    profileModalFormDescription.value = profileDescription.textContent;
  }
  modalWindow.classList.toggle("popup_is-opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileModalFormTitle.value;
  profileDescription.textContent = profileModalFormDescription.value;
  toggleModalWindow(profileModal);
}

function createCardElement(card) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".cards__list");

  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;
  return cardElement;
}

function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
}

const cardsList = document.querySelector(".cards__list");

initialCards.forEach((card) => renderCard(card, cardsList));
