class Grid extends HTMLElement {
    #$grid;
    #width;
    #height;

    constructor(options) {
        super();
        // this.#width = options.width;
        // this.#height = options.height;
        this.#createHTML();
    }

    #createHTML() {
        this.$main = document.createElement('div');
        this.$main.style.width = '100%';
        this.$main.style.height = '100%';

        this.#$grid = document.createElement('div');
        this.#$grid.className = 'grid';
        this.$main.appendChild(this.#$grid);
        // this.#$grid.style.width = `${this.#width}`;
        // this.#$grid.style.height = `${this.#height}`;
    }
}