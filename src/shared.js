import { html } from 'lit';

/**
 * @param {import("./types").ChanceItemEntry[]} items
 */
export function initializeChanceItems(items) {
    return items.map((item, i) => {
        return html`
            <chance-item
                .value=${item.value}
                index=${i}
                style="--item-index: ${i}; --item-total: ${items.length}"
            ></chance-item>
        `;
    });
}
