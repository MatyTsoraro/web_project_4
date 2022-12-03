import Popup from "./Popup";

export default class PopupWithImages extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._imageElement = this._popupElement.querySelector(".popup__image");
        this._imageCaption = this._popupElement.querySelector(".popup__caption");
    }

    open(data){
        this._imageElement.src = data.link;
        this._imageCaption.textContent = data.text;
        super.open();
    }
}

