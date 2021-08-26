let buttons = document.querySelectorAll(".button");

function changeColor(x) {
  x.style.background = "white";
  x.style.color = "black";
  setTimeout(() => {
    x.style.background = "black";
    x.style.color = "turquoise";
  }, 400);
}

//when some key is pressed
window.addEventListener("keydown", (e) => {
  let k = e.key;

  if (k === "=" || k == "Enter") {
    let equal = document.querySelector(`div[data-key="="]`);
    changeColor(equal);
    let x = document.getElementById("display").innerHTML;
    try {
      let z = eval(x);
      document.getElementById("display").innerHTML = z.toFixed(2);
    } catch (e) {
      alert("Wrong Input");
    }
  } else if (k == "Backspace") {
    let x = document.getElementById("display").innerHTML;
    x = x.substring(0, x.length - 1);
    document.getElementById("display").innerHTML = x;
  } else if (
    (k >= "0" && k <= "9") ||
    k == "-" ||
    k == "+" ||
    k == "/" ||
    k == "*" ||
    k == "."
  ) {
    let clicked = document.querySelector(`div[data-key="${k}"]`);
    console.log(clicked);
    changeColor(clicked);
    let x = document.getElementById("display").innerHTML;
    x = x + k;
    document.getElementById("display").innerHTML = x;
  }
});

//when buttons are pressed using mouse
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    changeColor(buttons[i]);
    let y = buttons[i].innerHTML;
    if (y === "=") {
      let x = document.getElementById("display").innerHTML;
      try {
        let z = eval(x);
        document.getElementById("display").innerHTML = z.toFixed(2);
      } catch (e) {
        alert("Wrong Input");
      }
    } else {
      let x = document.getElementById("display").innerHTML;
      x = x + y;
      document.getElementById("display").innerHTML = x;
    }
  });
}
