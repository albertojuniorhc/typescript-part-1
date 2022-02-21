export class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  update(model: T): void {
    const template = this.template(model);
    console.log(template);
    this.element.innerHTML = template;
  }

  template(model: T): string {
    throw Error('Child class must deploy the method template.')
  }
}
