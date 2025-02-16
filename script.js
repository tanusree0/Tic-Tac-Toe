let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector("#reset");

let turn_of_O=true;  //player 1

//wining pattern
const winp= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn_of_O) {
            box.innerText = "O";
            turn_of_O = false;
        } else {
            box.innerText = "X";
            turn_of_O = true;
        }
        box.disabled=true;
        setTimeout(checkw, 50);
    });
});
const diableboxes=() => {
    for(let b of boxes){
        b.disabled=true;
        enableboxes();
    }
}
const enableboxes=() => {
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
}

const checkw=() => {
    for(let pattern of winp){
      let p1=boxes[pattern[0]].innerText;
      let p2=boxes[pattern[1]].innerText;
      let p3=boxes[pattern[2]].innerText;
      
      if(p1!=""&& p2!=""&&p3!=""){
        if(p1===p2 &&p2==p3){
            alert(`${p1} wins!`);
            diableboxes();
            return;
        }
        
      }
    }
}
resetb.addEventListener("click", () => {
    enableboxes();
});




