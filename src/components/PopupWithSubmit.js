import {
    Popup
} from "./Popup";

export class PopupWithSubmit extends Popup {
    setAction(action) {
        this._submitHandler = action;

    }

    setEventListeners() {
        this._popupElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submitHandler();
        });
        super.setEventListeners();
    }
    renderLoading(isLoading, text = "Loading...") {
        //universal function for render loading that searches for the button and adds the rendering text while loading

        if (isLoading) {
         this._submitButton = this._formElement.querySelector(".form__button");
         this._submitButtonText = this._submitButton.textContent;
         this._submitButton.textContent = text;
        } else {
         this._submitButton.textContent = this._submitButtonText;
        }
       }
}