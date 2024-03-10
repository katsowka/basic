// console.log(document);
// console.dir(document);
// alert("success")

// back-end stuff
const diceOptions = [1, 2, 3, 4];
let sums = [];
let diffs = [];
let prods = [];
let quots = [];

for (let i=1; i<5; i++){
  for (let j=1; j<5; j++){
    sums.push(i+j);
    diffs.push(Math.abs(i-j));
    prods.push(i*j);
    if (Math.max(i, j)/ Math.min(i, j)%1===0){
      quots.push(Math.max(i, j)/ Math.min(i, j));
    }   
  }
}

const nums = Array.from(new Set(sums.concat(diffs, prods, quots)));

function makeGrid(gridKeys, nums){
  let gridVals = _.sampleSize(nums, 9);
  let grid = {};
  for (let i = 0; i < gridKeys.length; i++){
    grid[gridKeys[i]]=gridVals[i];
  }
  return grid;
}

// fixed items for each game

// const gridKeys = ["b00", "b01", "b02", "b10", "b11", "b12", "b20", "b21", "b22"];
// const grid = makeGrid(gridKeys, nums);
// const gridVals = Object.values(grid)

 
// // changing items for each game, from back-end

// let gridValsLeft = gridVals.slice(0);

// for (let i=0; i<gridKeys.length; i++){
// document.getElementById(String(gridKeys[i])).textContent = grid[gridKeys[i]];
// }


// front end stuff

const gridMessageStart = "Your Starting Grid:";
const gridMessageNow = "Your Grid Now:";
const gridMessageEnd = "You Won!";

document.getElementById("grid-message").textContent = gridMessageStart;

// document.getElementById("b22").textContent = '5'; //grid[gridKeys[0]];
// document.getElementById(`${gridKeys[0]}`).textContent = grid[gridKeys[0]];

// leave grid for now!! it runs in CodePen! Just do the sections!!!!
