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

// helper functions

function outcomesF(n1, n2){
    const sum = n1 + n2;
    const expr_s = `${n1} + ${n2} = ${sum}`;
  
    const product = n1 * n2;
    const expr_p = `${n1} x ${n2} = ${product}`;
  
    const bigger = Math.max(n1, n2);
    const smaller = Math.min(n1, n2);
  
    const difference = bigger - smaller;
    const expr_d = `${bigger} - ${smaller} = ${difference}`;
  
    const quotient = (bigger % smaller === 0) ? Math.floor(bigger / smaller) : bigger / smaller;
    const expr_q = `${bigger} / ${smaller} = ${quotient}`;
  
    const outcomes = {"S": {"name": "Sum", "value": sum, "expression": expr_s},
                  "P": {"name": "Product", "value": product, "expression": expr_p},
                  "D": {"name": "Difference", "value": difference, "expression": expr_d},
                  "Q": {"name": "Quotient", "value": quotient, "expression": expr_q}};
    return outcomes;
  }


// front end stuff

document.getElementByClass("after-roll").style.visibility = "hidden"
document.getElementByClass("after-choice").style.visibility = "hidden"

const gridMessageStart = "Your Starting Grid:";
const gridMessageNow = "Your Grid Now:";
const gridMessageEnd = "You Won!";

document.getElementByID("grid-message").textContent = gridMessageStart;

function rollDice() {
    // document.getElementById("after-roll").style.visibility = "visible";
    const n1 = Math.floor(Math.random() * 4 ) + 1;
    const n2 = Math.floor(Math.random() * 4 ) + 1;
    outcomes = outcomesF(n1, n2);
    const rolls = `You rolled a ${n1} and a ${n2}.`;
    document.getElementById("numbers-rolled").textContent = rolls;
}

function getOutcome(){
    // document.getElementById("after-choice").style.visibility = "visible"
    const op = document.getElementById("op").value.toUpperCase().trim();
    const value = outcomes[op]["value"];
    const i = gridVals.indexOf(value);
    const expression = outcomes[op]["expression"];
    document.getElementById("choice-msg").textContent = `You chose ${op}.`;
    document.getElementById("expression").textContent = expression ;
    if (gridValsLeft.includes(value)){
        document.getElementById("outcome-msg").textContent = 
          `Yes! You just crossed ${value} off the grid!`;
          document.getElementById(gridKeys[i]).textContent = "X";
          document.getElementById(gridKeys[i]).style.backgroundColor = "orange";
    }
    else {document.getElementById("outcome-msg").textContent = 
          `Sorry, ${value} isn't on the grid. Try again.`}
    
  }
