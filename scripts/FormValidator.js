export default FormValidator;


class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector
        this._submitButtonSelector = settings.submitButtonSelector
        this._inactiveButtonClass = settings.inactiveButtonClass
        this._errorClass = settings.errorClass

        this._formEl = formEl
    }

    _showInputError(input, formEl, settings) {
        const errorElement = this._formEl.querySelector('#' + input.id + '-error')
        errorElement.textContent = input.validationMessage
        errorElement.classList.add(settings.errorClass)
    }

    _toggleButtonState() {
        const formEl = this._formEl
        const submitButton = formEl.querySelector(this._submitButtonSelector)

        if (submitButton.classList.contains(this._inactiveButtonClass)) {

        }

        _hasValidInput()
        {
            const formEl = this._formEl
            const submitButton = formEl.querySelector(this._submitButtonSelector)

            if (submitButton.classList.contains(this._inactiveButtonClass)) {
                return false
            }

        }


        _checkInputValidity()
        {
            const formEl = this._formEl

        }

        _setEventListeners()
        {
            this._inputList = Array.from(
                this.formEl.querySelectorAll(this._settings.inputSelector)
            )
            this._button = this._formEl.querySelector(
                this._settings.submitButtonSelector
            )
            toggleButton(inputList, button, settings)
            inputList.forEach(input => {
                input.addEventListener('input', e => {
                    checkInputValidity(this._formEl, input, settings)
                    toggleButton(inputList, button, settings)
                })
            })
        }

        enableValidation()
        {
            this._formEl.addEventListener('submit', e => e.preventDefault())
            setEventListeners(formEl, settings)
        }
    }





