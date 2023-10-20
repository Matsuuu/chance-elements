/**
 * @param {HTMLSlotElement} slot
 */
export function initializeChanceItems(slot) {
    const items = slot.assignedElements();

    items.forEach((/** @type {HTMLElement} */ item, i) => {
        item.setAttribute('index', i.toString());
        item.style.setProperty('--item-index', i.toString());
    });
}
