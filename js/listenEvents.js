import MathFunctions from "./mathFunctions.js";
import themes from "./themes.js";
import Utils from "./utils.js";

const Event = (() => {
  function clickEvent() {
    document.addEventListener("click", (e) => {
      MathFunctions.catchValue(e);
    });
  }
  function changeEvent() {
    Utils.selectElement("#theme-switch").element.addEventListener(
      "change",
      (e) => {
        if (Number.parseInt(e.target.value) === 0) {
          Utils.selectElement("body").filterClass(themes.theme_1);
        } else if (Number.parseInt(e.target.value) === 5) {
          Utils.selectElement("body").filterClass(themes.theme_3);
        } else {
          Utils.selectElement("body").filterClass(themes.theme_2);
        }
      }
    );
  }

  return {
    clickEvent,
    changeEvent,
  };
})();

export default Event;
