const buttons = document.querySelectorAll("button");
const displayElm = document.querySelector("#result");

const symbols = ["+", "-", "*", "/"];

let textToDisplay = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    const lastChar = textToDisplay[textToDisplay.length - 1];

    displayElm.style.backgroundColor = "";
    displayElm.style.color = "";

    //not letting to add double dot
    if (val === "." && textToDisplay.includes(".")) return;

    //not allowig to click symbol in beginning
    if (textToDisplay.length < 1 && symbols.includes(val)) return;

    //if operator already exist, replace it with new one
    if (symbols.includes(lastChar) && symbols.includes(val)) {
      // remove the last char from the string
      textToDisplay = textToDisplay.slice(0, -1);
    }

    //AC clear everything from the display
    if (val === "AC") {
      alert("KJk");
      return resetDisplay();
    }

    //shows the total calculated value
    if (val === "=") {
      if (symbols.includes(lastChar)) {
        textToDisplay = textToDisplay.slice(0, -1);
      }
      return onTotal();
    }
    //
    if (val === "C") {
      textToDisplay = textToDisplay.slice(0, -1);
      return display(textToDisplay);
    }
    //shows the value on the display
    textToDisplay += val;
    display(textToDisplay);
  });
});

const display = (toDisplay) => {
  displayElm.innerText = toDisplay || "0.00";
};

const onTotal = () => {
  const prankNum = randomNumber();

  if (prankNum > 0) {
    //do some animated or something
    displayElm.style.backgroundColor = "red";
    displayElm.style.color = "white";

    //Animation
    displayElm.classList.add("prank");

    //remove the class name after animation endless
    displayElm.addEventListener("animationend", () =>
      displayElm.classList.remove("prank")
    );
  }

  const total = eval(textToDisplay) + prankNum;
  console.log(prankNum);

  display(total);
  textToDisplay = "";
};

const resetDisplay = () => {
  display(textToDisplay);
  textToDisplay = "";
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10); //0-10
  //   console.log(num, "from randomNumber");
  return num < 3 ? num : 0;
};
