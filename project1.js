let mainbox = document.querySelectorAll(".b");
let main = document.querySelector(".main");
let h = document.querySelector("#mainkah1")
let reset = document.querySelector(".reset");
let newB = document.querySelector("#newB");

reset.classList.remove("hide2");

let person1 = "true";
const win_possibility = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const playAgain = () => {
        person1="true";
        boxenabled();
        main.classList.add("hide");
        reset.classList.remove("hide2");
    }

mainbox.forEach((box) => {
    box.addEventListener("click", () => {
        if (person1 == "true") {
            box.innerText = "O";
            person1 = "false";
        }
        else {
            box.innerText = "X";
            person1 = "true";
        }
        box.disabled=true;
        checkWinner();
    })
})

const boxDisabled=()=>{
    for(let box of mainbox){
        box.disabled=true;
    }
}
const boxenabled=()=>{
    for(let box of mainbox){
        box.disabled=false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (let possibility of win_possibility) {
        let pos1 = mainbox[possibility[0]].innerText;
        let pos2 = mainbox[possibility[1]].innerText;
        let pos3 = mainbox[possibility[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner");
                alert("You Win!");
                showWinner(pos1);
                boxDisabled();
            }
        }
    }
}
const showWinner = (pos) => {
    if (pos == "O") {
        pos = "person_1";
    } else { pos = "person_2" }
    h.innerText = `CONGRATULATIONS!, WINNER IS ${pos}`;
    main.classList.remove("hide");
    reset.classList.add("hide2");
}

reset.addEventListener("click", playAgain)
newB.addEventListener("click", playAgain)

