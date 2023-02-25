const box = document.querySelectorAll(".box");

const rowOne = ['a','b','c'];
const rowTwo = ['d','e','f'];
const rowThree = ['g','h','i'];
const rowOneVertical = ['a','b','c'];
const rowTwoVertical = ['d','e','f'];
const rowThreeVertical = ['g','h','i'];
const rowCross = ['a','b','c'];
const rowCrossTwo = ['d','e','f'];

const arrays =[rowOne, rowTwo, rowThree, rowOneVertical, rowTwoVertical, rowThreeVertical, rowCross, rowCrossTwo];

console.log(box);
let player = 0;
box.forEach((box, i) => {
    box.addEventListener("click", () => {
        if (box.classList.contains("checked")) {
            return;
        }
        if (i < 3) {
            console.log("less");
            rowOne[i] = player;
            console.log(rowOne);
        }
        if (i >= 3 && i < 6) {
            console.log('middle')
            rowTwo[i - 3] = player;
            console.log(rowTwo);
        }
        if (i > 5) {
            console.log('end');
            rowThree[i - 6] = player;
            console.log(rowThree);
        }
        if(i === 0) {
            rowOneVertical[0] = player;
            rowCross[0] = player;
        }
        if(i === 3) {
            rowOneVertical[1] = player;
        }
        if(i === 6) {
            rowOneVertical[2] = player;
            rowCrossTwo[2] = player;
        }
        if(i === 1) {
            rowTwoVertical[0] = player;
        }
        if(i === 4) {
            rowTwoVertical[1] = player;
            rowCross[1] = player;
            rowCrossTwo[1] = player;
        }
        if(i === 7) {
            rowTwoVertical[2] = player;
        }
        if(i === 2) {
            rowThreeVertical[0] = player;
            rowCrossTwo[0] = player;
        }
        if(i === 5) {
            rowThreeVertical[1] = player;
        }
        if(i === 8) {
            rowThreeVertical[2] = player;
            rowCross[2] = player;
        }
        player === 0
            ? ((box.innerHTML = `<i class="fa-solid fa-x"></i>`), (player = 1))
            : ((box.innerHTML = `<i class="fa-regular fa-circle"></i>`),
              (player = 0));
        box.classList.add("checked");

        console.log(rowOne.every( (val, i, arr) => val === arr[0] )) 
        console.log(rowOneVertical)
        arrays.forEach(array => {

            if(array.every( (val, i, arr) => val === arr[0] )) {
                setTimeout(() => {
                    alert(`Player: ${player === 0 ? 2 : 1} wins!`)
                },200)
                return;
            }
        })
    });
});
