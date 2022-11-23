let divElement = document.createElement("div");
divElement.classList.add("title");
document.body.append(divElement);

let hElement = document.createElement("h2");
divElement.append(hElement);

let titleText = document.createTextNode("Калькулятор");
hElement.append(titleText);

let divOneElement = document.createElement("div");
divOneElement.classList.add("divOneElement");
divElement.append(divOneElement);

let pElement = document.createElement("p");
divOneElement.append(pElement);

let titleTextP = document.createTextNode("Введите число: ");
pElement.append(titleTextP);

let inputOneElement = document.createElement("input");
inputOneElement.classList.add("input-one");
inputOneElement.setAttribute("placeholder", "Введите число");
divOneElement.append(inputOneElement);

let divElementOperation = document.createElement("div");
divElementOperation.classList.add("divElementOperation");
divElement.append(divElementOperation);

let pElementTwo = document.createElement("p");
divElementOperation.append(pElementTwo);

let operationText = document.createTextNode("Введите операцию: ");
pElementTwo.append(operationText);

let divElementSelect = document.createElement("div");
divElementSelect.classList.add("selectDiv");
divElementOperation.append(divElementSelect);

let selectElement = document.createElement("select");
selectElement.classList.add("select");
divElementSelect.append(selectElement);

let selectOption = document.createElement("option");
selectOption.innerText = "";
selectElement.append(selectOption);

let selectOptionPlus = document.createElement("option");
selectOptionPlus.classList.add("optionPlus");
selectOptionPlus.innerText = "+";
selectElement.append(selectOptionPlus);

let selectOptionMinus = document.createElement("option");
selectOptionMinus.classList.add("optionMinus");
selectOptionMinus.innerText = "-";
selectElement.append(selectOptionMinus);

let selectOptionDivide = document.createElement("option");
selectOptionDivide.classList.add("optionDivide");
selectOptionDivide.innerText = "/";
selectElement.append(selectOptionDivide);

let selectOptionMultiply = document.createElement("option");
selectOptionMultiply.classList.add("optionMultiply");
selectOptionMultiply.innerText = "*";
selectElement.append(selectOptionMultiply);

let divTwoElement = document.createElement("div");
divTwoElement.classList.add("divTwoElement");
divElement.append(divTwoElement);

let pTwoElement = document.createElement("p");
divTwoElement.append(pTwoElement);

let titleTextPTwo = document.createTextNode("Введите число: ");
pTwoElement.append(titleTextPTwo);

let inputTwoElement = document.createElement("input");
inputTwoElement.classList.add("input-two");
inputTwoElement.setAttribute("placeholder", "Введите число");
divTwoElement.append(inputTwoElement);

let divButtonElement = document.createElement("div");
divButtonElement.classList.add("divButtonElement");
divElement.append(divButtonElement);

let buttonElement = document.createElement("button");
buttonElement.classList.add("button");
buttonElement.innerText = "Вычислить";
buttonElement.addEventListener("click", clickButton)
divButtonElement.append(buttonElement);

let resultElement = document.createElement("div");
resultElement.classList.add("resultElement");
resultElement.innerText = "Ваш результат :"
divElement.append(resultElement);

let resultElementNumber = document.createElement("div");
resultElementNumber.classList.add("resultElementNumber");
resultElement.append(resultElementNumber);

let brElement = document.createElement("hr");
divButtonElement.append(brElement);

function clickButton() {
    let z = +inputOneElement.value;
    let a = +inputTwoElement.value;
    let result;
    switch (selectElement.value) {
        case '+':
            result = z + a;
            break;
        case '-':
            result = z - a;
            break;
        case '*':
            result = z * a;
            break;
        case '/':
            result = z / a;
            break;
    }

    return resultElementNumber.innerHTML = result;
}
