import Utils from "./utils.js";

const MathFunctions = (() => {
  let string = "",
    operator = "",
    num = "",
    number = 0,
    values = [];

  function math() {
    this.addition = () =>
      (values = [values.reduce((acc, current) => acc + current, 0)]);
    this.substraction = () =>
      (values = [values.reduce((acc, current) => -current - acc, 0)]);
    this.multiplication = () =>
      (values = [values.reduce((acc, current) => acc * current, 1)]);
    this.division = () =>
      (values = [values.reduce((acc, current) => acc / current)]);
  }

  const mathFunc = new math();

  function resetValues() {
    string = "";
    operator = "";
    num = "";
    number = 0;
    values = [];
  }

  function deleteLastOperator(string) {
    function deleteOperator(value) {
      return string.slice(0, string.lastIndexOf(value));
    }
    if (string.endsWith("+")) {
      return deleteOperator("+");
    }
    if (string.endsWith("-")) {
      return deleteOperator("-");
    }
    if (string.endsWith("*")) {
      return deleteOperator("*");
    }
    if (string.endsWith("/")) {
      return deleteOperator("/");
    }
  }

  function resolveOperation(operator) {
    if (operator === "+") {
      mathFunc.addition();
    }
    if (operator === "-") {
      mathFunc.substraction();
    }
    if (operator === "X") {
      mathFunc.multiplication();
    }
    if (operator === "/") {
      mathFunc.division();
    }
  }

  function displayRender(value) {
    if (/\d/.test(value)) {
      value.toString().length > 13
        ? Utils.selectElement(".display-content").changeFontSize(20)
        : Utils.selectElement(".display-content").changeFontSize(32);
    }

    Utils.selectElement(".display-content").include_to_DOM(value);
  }

  function catchValue(e) {
    try {
      const value = e.target.dataset.value;
    
      if (value === "+") {
        values.push(number);
        if (operator === "+") {
          resolveOperation(operator);
          displayRender(values[0]);
          string = values[0].toString().concat(operator);
        } else {
          resolveOperation(operator ? operator : value);

          string =
            values.length > 0
              ? values[0].toString().concat(value)
              : string + value;
          displayRender(string);
          operator = "+";
        }
        num = "";
      }
      if (value === "-") {
        values.push(number);
        if (operator === "-") {
          resolveOperation(operator);
          displayRender(values[0]);
          string = values[0].toString().concat(operator);
        } else {
          resolveOperation(operator ? operator : value);

          string =
            values.length > 0
              ? values[0].toString().concat(value)
              : string + value;
          displayRender(string);
          operator = "-";
        }
        num = "";
      }
      if (value === "X") {
        values.push(number);
        if (operator === "X") {
          resolveOperation(operator);
          displayRender(values[0]);
          string = values[0].toString().concat(operator);
        } else {
          resolveOperation(operator ? operator : value);

          string =
            values.length > 0
              ? values[0].toString().concat(value)
              : string + value;
          displayRender(string);
          operator = "X";
        }
        num = "";
      }
      if (value === "/") {
        values.push(number);
        if (operator === "/") {
          resolveOperation(operator);
          displayRender(values[0]);
          string = values[0].toString().concat(operator);
        } else {
          resolveOperation(operator ? operator : value);
          string =
            values.length > 0
              ? values[0].toString().concat(value)
              : string + value;
          displayRender(string);
          operator = "/";
        }
        num = "";
      }
      if (value === "equal") {
        values.push(number);
        if(operator) resolveOperation(operator);
        if (values[0] === Infinity) {
          resetValues();
          throw new Error("Undefined");
        } else {
          displayRender(values[0]);
          string = deleteLastOperator(string);
          resetValues();
        }
      }
      if (value === "reset") {
        resetValues();
        displayRender("0");
      }
      if (value === "del") {
        string = string.slice(0, string.length - 1);
        if (string === "") {
          resetValues();
        } else {
          number = operator === "+" || operator === "-" ? 0 : 1;
        }
        displayRender(string === "" ? 0 : string);
      }
      if (/[0-9.]/.test(value)) {
        string += value;
        num += value;
        number = Number.parseFloat(num);
        displayRender(string);
      }
    } catch (error) {
      displayRender(error.Error);
    }
  }

  return {
    catchValue,
  };
})();

export default MathFunctions;
