

//Funtions for open&close Modal windows

export function handleClickToClose (e) {
    if (e.target.classList.contains('popup_open')) {
      closePopup(e.target)
    }
  }

  export function handleEscToClose (e) {
    if (e.key === 'Escape') {
      const popupVisible = document.querySelector('.popup_open')
      closePopup(popupVisible)
    }
  }

  export function openPopup (popup) {
    popup.classList.add('popup_open')
    document.addEventListener('mousedown', handleClickToClose)
    document.addEventListener('keydown', handleEscToClose)
  }

  export function openEditProfilePopup () {
    inputName.value = profileName.textContent
    inputOccupation.value = profileOccupation.textContent
    openPopup(editProfilePopup)
  }

  export function closePopup (popup) {
    popup.classList.remove('popup_open')
    document.removeEventListener('mousedown', handleClickToClose)
    document.removeEventListener('keydown', handleEscToClose)
  }


