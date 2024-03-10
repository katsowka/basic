// console.log(document);
// console.dir(document);
// alert("success")

// fixed items, from back-end:

const gridKeys = ["b00", "b01", "b02", "b10", "b11", "b12", "b20", "b21", "b22"];
const grid = {"b00": 1, "b01": 4, "b02": 2, "b10": 9, "b11": 0, "b12": 3, "b20": 16, "b21": 12,  "b22": 6};
const gridVals = [1,4,2,9,0,3,16,12,6]; 

// changing items for each game, from back-end

let gridValsLeft = gridVals.slice(0);

for (let i=0; i<gridKeys.length; i++){
document.getElementById(String(gridKeys[i])).textContent = grid[gridKeys[i]];
}


// front end stuff

const gridMessageStart = "Your Starting Grid:";
const gridMessageNow = "Your Grid Now:";
const gridMessageEnd = "You Won!";

document.getElementById("grid-message").textContent = gridMessageStart;

// leave grid for now!! it runs in CodePen! Just do the sections!!!!
