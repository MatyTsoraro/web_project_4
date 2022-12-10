export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    addItem(item) {
        const element = this._renderer(item);
        this._container.append(element);
    }
    prepenedItem(item) {
        this._container.prepend(item);
    }

    renderItems() {
        this._items.forEach((item) => {
            this.addItem(item);
        });
    }
}