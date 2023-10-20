import './chance-wheel.js';
import { html, render } from 'lit';

render(
    html`
        <chance-wheel>
            <chance-item value="Foo"></chance-item>
            <chance-item value="Bar"></chance-item>
            <chance-item value="Baz"></chance-item>
            <chance-item value="Foo"></chance-item>
            <chance-item value="Bar"></chance-item>
            <chance-item value="Baz"></chance-item>
            <chance-item value="Foo"></chance-item>
            <chance-item value="Bar"></chance-item>
            <chance-item value="Baz"></chance-item>
            <chance-item value="Foo"></chance-item>
            <chance-item value="Bar"></chance-item>
            <chance-item value="Baz"></chance-item>
        </chance-wheel>
    `,
    document.body,
);
