
 //Open popup


const openPopup = (modal) => {
  modal.classList.add("popup_opened");

  document.addEventListener("keydown", closePopupByEscape);
  modal.addEventListener("mousedown", closePopupOnRemoteClick);
};


 // Hide popup


const hidePopup = (modal) => {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEscape);
  modal.removeEventListener("mousedown", closePopupOnRemoteClick);
};


 // Close popup by 'esc' key


const closePopupByEscape = (evt) => {
  if (evt.key === "Escape") {
    hidePopup(document.querySelector(".popup_opened"));
  }
};

//close popup by click mouse out off popup
const closePopupOnRemoteClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    hidePopup(evt.target);
  }
};

export { openPopup, hidePopup };
