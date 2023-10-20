import { LitElement, css, html } from "lit";

export class ChanceItem extends LitElement {

    static get properties() {
        return {
            value: { type: String }
        };
    }

    constructor() {
        super();
        this.value = "";
    }

    render() {
        return html`
            <span>${this.value}</span>
        `
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `
    }
}

if (!customElements.get("chance-item")) {
    customElements.define("chance-item", ChanceItem);
}
