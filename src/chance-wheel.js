import { LitElement, css, html } from 'lit';
import './chance-item.js';
import { initializeChanceItems } from './shared.js';

export class ChanceWheel extends LitElement {
    static get properties() {
        return {
            items: { type: Array }
        }
    }

    constructor() {
        super();
        this.items = [];
    }

    render() {
        return html`
            <section class="dial">
                ${initializeChanceItems(this.items)}
            </section>
        `;
    }

    static styles = css`
        :host {
            overflow: hidden;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fafafa;
            aspect-ratio: 1;
            position: relative;
            --pi: 3.14159265358979;
        }

        .dial {
            display: flex;
            position: relative;
            height: 100%;
            width: 100%;
            margin: auto;
        }

        .dial::after {
            content: '';
            display: block;
            position: absolute;
            height: 5%;
            aspect-ratio: 1;
            background: lightblue;
            border-radius: 50%;
        }

        chance-item {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 50%;
            transform: rotate(calc(360deg - (360deg / var(--item-total) * var(--item-index))));
            transform-origin: left center;
            display: flex;
            justify-content: flex-end;
            clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 50%);
            height: calc(330% / var(--item-total));
        }

        chance-item::part(value) {
            background: rgba(0, 0, 120, 0.2);
            padding: 0 10% 0 2%;
            width: 75%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            border-radius: 5%;
        }

    `;
}

customElements.define('chance-wheel', ChanceWheel);
