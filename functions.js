function aF () {
  console.log('f1')
}
aF()


function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks ()


let f2 = 3
function aF () {
  f2 = 2;
}
aF()
console.log(f2) 



function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');



//DEFAULT PARAMETER//
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!



function monitorCount (rows, columns){
  return rows*columns
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);


//HELPER FUNCTIONS//
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors (rows, columns){
  return monitorCount(rows, columns)*200;
}
const totalCost = costOfMonitors (5, 4);
console.log(totalCost);


//FUNCTION EXPRESSIONS//
const plantNeedsWater = function (day){
  if (day === 'Wednesday') {
    return true} else {
    return false 
   }
}
plantNeedsWater ('Wednesday')
console.log(plantNeedsWater ('Wednesday'));

//ARROW FUNCTIONS//
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//CONCISE FORMAT//
const squareNum = (num) => {
  return num * num;
};
//to this
const squareNum = num => num * num;

const plantNeedsWater = day => day === 'Wednesday' ? true : false;



//function
const numClosedDoors = 3;
const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * numClosedDoors);
};
randomChoreDoorGenerator()
console.log(choreDoor)
//end function