let buttons = document.querySelectorAll(".button");

function changeColor(currOperation) {
  currOperation.style.background = "white";
  currOperation.style.color = "black";
  setTimeout(() => {
    currOperation.style.background = "black";
    currOperation.style.color = "turquoise";
  }, 400);
}

//when buttons are pressed using keyboard
window.addEventListener("keydown", (e) => {
  let keyPressed = e.key;

  if (keyPressed === "=" || keyPressed == "Enter") {
    let equal = document.querySelector(`div[data-key="="]`);
    changeColor(equal);
    let currOperation = document.getElementById("display").innerHTML;
    try {
      let result = eval(currOperation);
      document.getElementById("display").innerHTML = result.toFixed(2);
    } catch (e) {
      alert("Wrong Input");
    }
  } else if (keyPressed == "Backspace") {
    let currOperation = document.getElementById("display").innerHTML;
    currOperation = currOperation.substring(0, currOperation.length - 1);
    document.getElementById("display").innerHTML = currOperation;
  } else if (
    (keyPressed >= "0" && keyPressed <= "9") ||
    keyPressed == "-" ||
    keyPressed == "+" ||
    keyPressed == "/" ||
    keyPressed == "*" ||
    keyPressed == "."
  ) {
    let clicked = document.querySelector(`div[data-key="${keyPressed}"]`);
    console.log(clicked);
    changeColor(clicked);
    let currOperation = document.getElementById("display").innerHTML;
    currOperation = currOperation + keyPressed;
    document.getElementById("display").innerHTML = currOperation;
  }
});

//when buttons are pressed using mouse
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    changeColor(buttons[i]);
    let y = buttons[i].innerHTML;
    if (y === "=") {
      let currOperation = document.getElementById("display").innerHTML;
      try {
        let result = eval(currOperation);
        document.getElementById("display").innerHTML = result.toFixed(2);
      } catch (e) {
        alert("Wrong Input");
      }
    } else {
      let currOperation = document.getElementById("display").innerHTML;
      currOperation = currOperation + y;
      document.getElementById("display").innerHTML = currOperation;
    }
  });
}
