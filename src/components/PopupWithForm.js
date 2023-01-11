import {
    Popup
} from "./Popup";
export class PopupWithForm extends Popup {
    constructor(PopupSelector, handleSubmit, _submitButton) {
        super(PopupSelector);
        this._handleSubmit = handleSubmit;
        this._inputs = [...this._formElement.querySelectorAll(".form__input")];;
        this._submitButton = this._formElement.querySelector(".form__button");

    }
    _getInputValues() {

        const inputValues = {}
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        })
        return inputValues;

    }
    setInputValues(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });
    }
    setEventListeners() {
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }
    close = () => {
        super.close()
        this._formElement.reset(); //reset the form when openning again

    }
    renderLoading(isLoading, text = "Loading...") {
        //universal function for render loading that searches for the button and adds the rendering text while loading

        if (isLoading) {
         //this._submitButton = this._formElement.querySelector(".form__button");
         this._submitButtonText = this._submitButton.textContent;
         this._submitButton.textContent = text;
        } else {
         this._submitButton.textContent = this._submitButtonText;
        }
       }

}