class Pane extends HTMLElement {
    #width;
    #height;

    constructor(options) {
        super();
        this.#width = options.width;
        this.#height = options.height;
        this.#createHtml();
    }

    #createHtml() {
        this.$main = document.createElement('div');
        this.$main.style.width = `${this.#width}`;
        this.$main.style.height = `${this.#height}`;
    }

}

class GridPane extends Pane {
    #grid;

    constructor(options) {
        super(options);
        this.#createHTML();
    }

    #createHTML() {
        this.#grid = new Grid();
        this.#grid.addTo(this.$main);
    }
}