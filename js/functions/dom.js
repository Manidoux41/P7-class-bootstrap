/**
 * Creates a new element with the specified tag name and attributes.
 *
 * @param {string} tagName - The tag name of the element to create.
 * @param {Object} attributes - The attributes to assign to the element.
 * @return {HTMLElement} The newly created element.
 */
export function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName);
    for(const [attribute, value] of Object.entries(attributes)) {
        if(value !== null) {
            element.setAttribute(attribute, value);
        }
    }
    return element;
}