import { LitElement, css, html } from 'lit';
import './chance-item.js';
import { initializeChanceItems } from './shared.js';

export class ChanceWheel extends LitElement {
    /**
     * @param {{ target: HTMLSlotElement; }} ev
     */
    initItems(ev) {
        /** @type { HTMLSlotElement } */
        const slot = ev.target;
        initializeChanceItems(slot);
    }

    render() {
        return html`
            <section class="dial">
                <slot @slotchange=${this.initItems}></slot>
            </section>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fafafa;
            aspect-ratio: 1;
        }

        .dial {
            display: flex;
            position: relative;
            width: 100%;
        }

        .dial::after {
            content: '';
            display: block;
            position: absolute;
            height: 100%;
            aspect-ratio: 1;
            background: lightblue;
            border-radius: 50%;
        }

        ::slotted(chance-item) {
            background: rgba(0, 0, 120, 0.2);
            position: absolute;
            padding: 1rem;
            width: 100%;
            transform: rotate(calc(30deg * var(--item-index)));
            transform-origin: left center;
        }
    `;
}

customElements.define('chance-wheel', ChanceWheel);
