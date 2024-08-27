const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id == "=") {
            if (display.value == "") {
                display.value = "Pero escriba algo";
            } else {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = "Syntax ERROR";
                }
            }
        } else if (btn.id == "AC") {
            display.value = "";
        } else if (btn.id == "DEL") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
    })
})