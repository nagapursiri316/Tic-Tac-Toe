let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");


let turno = true;
let count=0;



const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const resetGame=()=>{
  turno=true;
  count=0;
  enableBoxes();
  msgcontainer.classList.add("hide");
 };

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turno) {
      box.innerText = "O";
      turno = false;
    }
    else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    count++;
    
    let iswinner=checkwinner();
    
    if(count===9 && !iswinner){
      drawGame();
  
    }
  });
});
const drawGame=()=>{
  msg.innerText="it's a Draw";
  msgcontainer.classList.remove("hide");
  disableBoxes();
  }

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};

const showwinner = (winner) => {
  msg.innerText = `congratulations winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}

const checkwinner = () => {
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val && pos1val === pos3val) {
        console.log("winner", pos1val);
        showwinner(pos1val);
        return true;
      }
    }

  }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);