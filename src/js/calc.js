const output = document.querySelector("#output-value");
const historyValue = document.querySelector('#history-value');
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const calculate = () => {
    output.innerText = eval(output.innerText);
};

const showHistory = (result) => {
    historyValue.innerText = result;
};

const clear = () => {
    output.innerText = "";
    historyValue.innerText = "";
};

const backspace = () => {
    let value = output.innerText;
    value = value.substr(0, value.length - 1);
    output.innerText = value;
};

const insertValue = e => {
    if (
        e.target.id != "clear" &&
        e.target.id != "backspace" &&
        e.target.id != "equals"
    ) {
        output.innerText += e.target.innerText;
    } else if (e.target.id == "clear") {
        clear();
    } else if (e.target.id == "backspace") {
        backspace();
    }

    if (e.target.id == "equals") {
        const historyResult = `${output.innerText} =`;

        calculate();
        showHistory(historyResult);
    }
};

numbers.forEach(number => number.addEventListener("click", insertValue));
operators.forEach(operator => operator.addEventListener("click", insertValue));