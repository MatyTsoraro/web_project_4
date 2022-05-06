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

// Modals

const addCardModal = document.querySelector(".popup_type_add-card");

const previewModal = document.querySelector(".popup_type_preview");

const profileModal = document.querySelector(".popup_type_profile");
const profileModalForm = document.querySelector(".popup__form");
const profileModalFormTitle = profileModalForm.querySelector(
  ".popup__input_type_name"
);
const profileModalFormDescription = profileModalForm.querySelector(
  ".popup__input_type_description"
);

// Buttons and other DOM elements
const addCardButton = document.querySelector(".profile__add-button");
const addCardModalCloseButton = document.querySelector(".popup_close_add-card");
const previewModalCloseButton = document.querySelector(".popup_close_preview");
const profileModalCloseButton = document.querySelector(".popup_close_profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Wrapper
const cardsList = document.querySelector(".cards__list");

//////////////
//functions//
////////////

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

const onImagePreview = (card) => {
  const popupImage = previewModal.querySelector(".popup__image");
  popupImage.src = card.link;
  toggleModalWindow(previewModal);
};

const onLikeButtonClick = () => {
  console.log("like");
};

function createCardElement(card) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".cards__list");

  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.style.backgroundImage = `url(${card.link})`;

  cardTitle.textContent = card.name;

  cardImage.addEventListener("click", () => onImagePreview(card));
  //handle image click
  // cardElement
  // .querySelector(".card__like-button")
  // .addEventListener("click", (evt) => {
  //   evt.target.classList.toggle("card__like-button_active");
  // });
  // cardElement
  // .querySelector(".card__removeButton")
  // .addEventListener("click", () => {
  //   const thisCard = cardElement.closest(".card");
  //   thisCard.remove();
  // });

  cardLikeButton.addEventListener("click", () =>
    onLikeButtonClick(cardElement)
  );

  return cardElement;
}

function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
}

//////////////////
//Event handlers//
/////////////////

addCardButton.addEventListener("click", () => toggleModalWindow(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(addCardModal)
);
previewModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(previewModal)
);
profileModalForm.addEventListener("submit", formSubmitHandler);
profileEditButton.addEventListener("click", () =>
  toggleModalWindow(profileModal)
);
profileModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(profileModal)
);
initialCards.forEach((card) => renderCard(card, cardsList));
