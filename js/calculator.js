const calcPrint = document.querySelector(".calculator__print");
const calcBtn = document.querySelectorAll(".calculator__btn");
const action2 = document.querySelector(".action-2");
const action3 = document.querySelector(".action-3");
const img = document.querySelectorAll("img");
const calculator = document.querySelector(".calculator");
let print;
let num1 = "";
let num2 = "";
let num3 = ""
let action = "";
let numPrint
let num2Print

calcPrint.textContent = "";

img.forEach(function (event) {
    event.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });
});

calcBtn.forEach(function (ev) {
    ev.addEventListener("click", function () {
        print = ev.textContent;
        if (!ev.classList.contains("action-4") &&
            !ev.classList.contains("action-6")) {
            calcPrint.textContent += print;
        }
        if (ev.classList.contains("action")) {
            if (calcPrint.textContent.length > 1) {
                action = ev.textContent;
            }
        }
        if (calcPrint.textContent.length > 1 &&
            calcPrint.textContent.slice(-1) === action) {
                num1 = parseFloat(calcPrint.textContent
                    .substring(0, calcPrint.textContent.length - 1));
                    
            calcPrint.textContent = "";
        }

        //action + - * /
        if (ev.classList.contains("action-2")) {
            num2 = parseFloat(calcPrint.textContent.replace("=", ""));
            calcPrint.textContent = "";
            switch (action) {
                case "+":
                    if(num1 != "" && num2 != "") {
                        calcPrint.textContent = num1 + num2;
                    }
                    if (calcPrint.textContent == "NaN" || num2 == "") {
                        calcPrint.textContent = num1 + num1
                    }
                    if (calcPrint.textContent == "NaN" || num1 == "") {
                        calcPrint.textContent = 0
                    }
                    break;
                case "-":
                    if(num1 != "" && num2 != "") {
                        calcPrint.textContent = num1 - num2;
                    }
                    if (calcPrint.textContent == "NaN" || num2 == "") {
                        calcPrint.textContent = num1 - num1
                    }
                    if (calcPrint.textContent == "NaN" || num1 == "") {
                        calcPrint.textContent = 0
                    }
                    break;
                case "*":
                    if(num1 != "" && num2 != "") {
                        calcPrint.textContent = num1 * num2;
                    }
                    if (calcPrint.textContent == "NaN" || (num2 == "")) {
                        calcPrint.textContent = num1 * num1
                    }
                    if (calcPrint.textContent == "NaN" || num1 == "" || num2 == 0) {
                        calcPrint.textContent = 0
                    }
                    break;
                case "/":
                    if(num1 != "" && num2 != "") {
                        calcPrint.textContent = num1 / num2;
                    }
                    if (calcPrint.textContent == "NaN" || num2 == "") {
                        calcPrint.textContent = num1 / num1
                    }
                    if (calcPrint.textContent == "NaN" || num1 == "") {
                        calcPrint.textContent = 0
                    }
                    if (num2 == 0) {
                        calcPrint.textContent = "The divisor cannot be zero";
                        num1 = ""
                        num2 = ""
                    }
                    break;
            }
        }

        //action C
        if (ev.classList.contains("action-3")) {
            calcPrint.textContent = "";
            num1 = "";
            num2 = "";
            result = "";
        }

        //NaN and Infinity
        if (ev.classList.contains("action-4")) {
            if (calcPrint.textContent == "NaN" ||
                calcPrint.textContent == "Infinity" ||
                calcPrint.textContent == "The divisor cannot be zero") {
                calcPrint.textContent = "";
            }
            calcPrint.textContent = calcPrint.textContent.slice(0, -1);
        }

        // action sqrt
        if (ev.classList.contains("action-5")) {
            num3 = parseFloat(calcPrint.textContent
                    .replace(`${ev.textContent}`, ""));

            calcPrint.textContent = Math.sqrt(num3);

            numPrint = ""
            if (numPrint.split("√").length - 1) {
                numPrint = numPrint.slice(0, -1);
            }
            printNaN();
        }

        // action +/-
        if (ev.classList.contains("action-6")) {
            if (calcPrint.textContent[0] !== "-") {
                calcPrint.textContent = "-" + calcPrint.textContent;
                if (num1 == "") {
                } else if (num1 != "") {
                    numPrint = calcPrint.textContent.replace("-", "")
                }
            } 
            else if (calcPrint.textContent[0] === "-") {
                calcPrint.textContent = calcPrint.textContent.slice(1);
                if (num1 != "") {
                    numPrint = calcPrint.textContent.replace("-", "")
                }
            }
        }

        //action x^2
        if (ev.classList.contains("action-7")) {
            num3 = parseFloat(calcPrint.textContent
                    .replace(`${ev.textContent}`, ""));

            calcPrint.textContent = num3 * num3

            numPrint = ""
            if (numPrint.split("x2").length - 1) {
                numPrint = numPrint.slice(0, -2);
            }
            printNaN(); 
        }

        // action 1/x
        if (ev.classList.contains("action-8")) {
            num3 = parseFloat(calcPrint.textContent
                .replace(`${ev.textContent}`, ""));

            calcPrint.textContent = 1 / num3
            if (calcPrint.textContent == "Infinity" ||
                calcPrint.textContent == "0") {
                calcPrint.textContent = "The divisor cannot be zero";
            }

            num2Print = num3

            numPrint = ""
            if (numPrint.split("1/x").length - 1) {
                numPrint = numPrint.slice(0, -2);
            } 

            printNaN();
        }

        // action %
        if (ev.classList.contains("action-9")) {
            num2 = parseFloat(calcPrint.textContent
                .replace(`${ev.textContent}`, ""));

            calcPrint.textContent = numPrint = (num2 * num1) / 100;
            if (calcPrint.textContent === "NaN") {
                calcPrint.textContent = num1 / 100;
            }

            printNaN();
        }

        // action CE
        if (ev.classList.contains("action-10")) {
            calcPrint.textContent = "";
        }

        // point limit
        if (calcPrint.textContent.split(".").length - 1 > 1) {
            calcPrint.textContent = calcPrint.textContent.slice(0, -1);
        }

        function printNaN() {
            if (calcPrint.textContent === "NaN") {
                calcPrint.textContent = 0;
            }
        }
    });
});