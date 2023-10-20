import './chance-wheel.js';
import { html, render } from 'lit';

/** @type { import('./types.js').ChanceItemEntry[] } */
const items = [
    { value: "Foo" },
    { value: "Bar" },
    { value: "Baz" },
    { value: "Bin" },
    { value: "Foo" },
    { value: "Bar" },
    { value: "Baz" },
    { value: "Bin" },
    { value: "Foo" },
    { value: "Bar" },
    { value: "Baz" },
    { value: "Bin" }
];

render(
    html`
        <chance-wheel .items=${items}>
        </chance-wheel>
        <chance-wheel .items=${items.slice(0, 9)}>
        </chance-wheel>
        <chance-wheel .items=${items.slice(0, 6)}>
        </chance-wheel>
        <chance-wheel .items=${items.slice(0, 3)}>
        </chance-wheel>
    `,
    document.body,
);
