/**
 * Represents a collection of DOM elements selected by a given selector.
 * @class
 */
class DomSelector {
  /**
   * Creates a new DomSelector instance.
   * @param {string} selector - The CSS selector used to select elements.
   */
  constructor(selector) {
    /**
     * The NodeList of elements selected by the provided selector.
     * @type {NodeListOf<Element>}
     * @private
     */
    this.elements = document.querySelectorAll(selector);
  }

  /**
   * Executes a provided function once for each element in the NodeList.
   * @param {function} callback - Function to execute for each element.
   */
  forEach(callback) {
    this.elements.forEach(callback);
  }
}

/**
 * Selects elements from the DOM using a CSS selector.
 * @function
 * @param {string} selector - The CSS selector used to select elements.
 * @returns {DomSelector} - An instance of DomSelector representing the selected elements.
 */
function $(selector) {
  return new DomSelector(selector);
}

export default $;
