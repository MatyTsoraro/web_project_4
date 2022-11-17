class Card {
    constructor(card, cardSelector) {
        this._name = card.name;
        this._link = card.link;



        this._cardSelector = cardSelector;
    }

    _setEventListeners() {
        this._element
            .querySelector(".card__button_type_delete")
            .addEventListener("click", () => this._handleDelete);
        this._element
            .querySelector(".card__button_type_like")
            .addEventListener("click", () => this._toggleLikeButton);
        this._element
            .querySelector(".card__image")
            .addEventListener("click", () => this._handleCardPreview);
    }

    _handleDelete() {
        this._cardSelector.remove(this._name);

    }

    _toggleLikeButton() {
        this._element
            .querySelector(".card__button_type_like")
            .classList.toggle(".card__button_type_active");
    }

    _handleCardPreview() {
        this._element
            .querySelector(".card__image")
            .classList.toggle("card__image_preview_active");
    }

    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content.querySelector(".card")
            .cloneNode(true);
    }

    getView() {
        this_element = this_getTemplate();

        this_element.querySelector(".card__image").style.backgroundImage =
            "url$(${this._link})";
        this_element.querySelector(".card__title").textContent = this._name;

        this_setEventLisetners();
    }
}

export default Card;
