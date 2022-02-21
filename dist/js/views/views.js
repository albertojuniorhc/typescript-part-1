export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
    template(model) {
        throw Error('Child class must deploy the method template.');
    }
}
