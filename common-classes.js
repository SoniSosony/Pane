class HTMLElement {

    $main;

    constructor() {
    }

    addTo($element) {
        if (this.$main) {
            $element.append(this.$main);
        } else {
            throw new Error('$main is undefined');
        }
    }
}