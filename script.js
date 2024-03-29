console.log("script.js");

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");

let temp = 23

let closedDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

const playDoor = door => {
  numClosedDoors = numClosedDoors - 1;
  console.log(numClosedDoors);
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver("lose");
  }
};

const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
    console.log(choreDoor);
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
    console.log(choreDoor);
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
    console.log(choreDoor);
  } else {
  }
};

door1.onclick = () => {
  if (currentlyPlaying && !isClicked(door1)) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
};

door2.onclick = () => {
  if (currentlyPlaying && !isClicked(door2)) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
};

door3.onclick = () => {
  if (currentlyPlaying && !isClicked(door3)) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = "Good Luck";
  randomChoreDoorGenerator();
};

const gameOver = status => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
};

startRound();

/* 

 
*/
