import themes from "./themes.js";

const Utils = (() => {
  function element(value) {
    this.element = document.querySelector(value);

    this.addClass = (class_name) => this.element.classList.add(class_name);

    this.removeClass = (class_name) =>
      this.element.classList.remove(class_name);

    this.filterClass = (class_name) => {
      Object.values(themes).forEach((theme) => {
        theme === class_name
          ? this.addClass(class_name)
          : this.removeClass(theme);
      });
    };

    this.changeFontSize = (value) => this.element.style.fontSize = `${value}px`;
    
    this.include_to_DOM = (value) => this.element.innerHTML = value;
    
    this.getContent = this.element.textContent;
  }
  const selectElement = (value) => new element(value);

  return {
    selectElement,
  };
})();

export default Utils;
