//writing full name
const fullName = "Yuvika Wadhwa";
const heading = document.createElement("h1");

heading.textContent = fullName;
heading.style.textAlign = "center";
heading.style.color = "#A9A9A9";

// fullname to body using append
document.body.appendChild(heading);

const body = document.body;

const input1 = document.createElement("input");
const input2 = document.createElement("input");

const button = document.createElement("button");
button.textContent = "Sum";
// appending inputs to the body
button.addEventListener("click", calculateSum);
body.appendChild(input1);
body.appendChild(input2);
body.appendChild(button);

//calculating sum
function calculateSum() {
    const num1 = parseFloat(input1.value) || 0;
    const num2 = parseFloat(input2.value) || 0;
    const total = num1 + num2;

    const displaySum = document.createElement("p");
    displaySum.textContent = `Sum: ${total}`;
    body.appendChild(displaySum);
}

//validating 
const validateInput = () => {
    try {
        validateNumber(input1.value);
        validateNumber(input2.value);
    } catch (error) {
        showError(error);
    }
};

const validateNumber = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
        throw "Input should be a number";
    }
    return parsedValue;
};

//showing error
const showError = (errorMessage) => {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = errorMessage;
    errorMsg.style.color = "red";
    body.appendChild(errorMsg);

    input1.style.border = "1px solid red";
    input2.style.border = "1px solid red";
};

button.addEventListener("click", validateInput);
