import FormValidator from './FormValidator.js'
import Card from './Card.js'
import {
  handleClickToClose,
  handleEscToClose,
  openPopup,
  openEditProfilePopup,
  closePopup
} from './utils.js'

const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg'
  }
]

const cardSelector = '#card-template'

//Popups

const editProfilePopup = document.querySelector('.popup_type_edit-profile')
const addCardPopup = document.querySelector('.popup_type_add-card')
const imagePopup = document.querySelector('.popup_type_image-preview')

//Forms
const formProfile = document.querySelector('.form_type_profile')
const inputName = document.querySelector('.form__input_type_name')
const inputOccupation = document.querySelector('.form__input_type_occupation')

const formAdd = document.querySelector('.form_type_add')
const addTitleInput = document.querySelector('.form__input_type_image-title')
const addImageInput = document.querySelector('.form__input_type_image-link')

//Buttons
const openProfilePopupButton = document.querySelector(
    '.profile__button_type_edit'
)
const closeProfilePopupButton = document.querySelector(
    '.popup__button-close_type_profile'
)

const closeImagePopupButton = document.querySelector(
    '.popup__button-close_type_image'
)

const addCardButton = document.querySelector('.profile__button_type_add')
const closeAddPopupButton = document.querySelector(
    '.popup__button-close_type_add'
)

const createCardButton = formAdd.querySelector('.form__button')

//Other Elements
const profileName = document.querySelector('.profile__name')
const profileOccupation = document.querySelector('.profile__occupation')
const cardTemplate = document
    .querySelector('#card-template')
    .content.querySelector('.gallery__card')

const galleryList = document.querySelector('.gallery__list')

const previewImage = document.querySelector('.popup__image-preview')
const previewImageTitle = document.querySelector('.popup__image-title')

const closeButtons = document.querySelectorAll('.popup__button-close')

//Functions
function saveFormProfilePopup (e) {
  closePopup(editProfilePopup)
  e.preventDefault()
  profileName.textContent = inputName.value
  profileOccupation.textContent = inputOccupation.value
}

const createCard = card => {
  const cardElement = cardTemplate.cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')
  const cardTitle = cardElement.querySelector('.card__title')
  const deleteButton = cardElement.querySelector('.card__button_type_delete')
  const likeButton = cardElement.querySelector('.card__button_type_like')

  cardImage.src = card.link
  cardImage.alt = `Photo of ${card.name}`
  cardTitle.textContent = card.name

  const handleDelete = () => {
    cardElement.remove()
  }
  deleteButton.addEventListener('click', handleDelete)
  likeButton.addEventListener('click', toggleLikeButton)
  cardImage.addEventListener('click', handleCardPreview)

  const handleCardPreview = () => {
    previewImage.src = card.link
    previewImage.alt = `Photo of ${card.name}`
    previewImageTitle.textContent = card.name
    openPopup(imagePopup)
  }

  return cardElement
}

function toggleLikeButton (e) {
  const activeLikeButton = e.target
  activeLikeButton.classList.toggle('card__button_type_active')
}

const renderCard = card => {
  //const item = createCard(card);
  const cardItem = new Card(card, cardSelector)
  galleryList.prepend(card.getView())
}

initialCards.forEach(renderCard)

//EventListener
openProfilePopupButton.addEventListener('click', openEditProfilePopup)

closeButtons.forEach(button => {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => closePopup(popup))
})

formProfile.addEventListener('submit', saveFormProfilePopup)

addCardButton.addEventListener('click', () => {
  openPopup(addCardPopup)
})

formAdd.addEventListener('submit', function (e) {
  e.preventDefault()
  const card = {
    name: addTitleInput.value,
    link: addImageInput.value
  }
  renderCard(card)
  closePopup(addCardPopup)
  formAdd.reset()
  toggleButton(
      Array.from(formAdd.querySelectorAll(settings.inputSelector)),
      createCardButton,
      settings
  )
})

//Validation

const settings = {
  //formSelector: ".form",
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  errorClass: 'form__input-error_visible'
}
const editFormElement = editProfilePopup.querySelector('.form')
const addFormElement = addCardPopup.querySelector('.form')

const editFormValidator = new FormValidator(settings, editFormElement)
const addFormValidator = new FormValidator(settings, addFormElement)

editFormValidator.enableValidation()
addFormValidator.enableValidation()
