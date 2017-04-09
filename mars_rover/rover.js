var myGrid2 = [];
for (i=0; i<10; i++){
  myGrid2[i] = [];
  for (x=0; x<10; x++){
    myGrid2[i].push(x);
  }
}
myGrid2[0][0]='R0';
myGrid2[1][1]='X';
myGrid2[2][2]='X';
myGrid2[3][3]='X';


var myRover={
  position: [0,0],
  direction: 'N'
};

console.log(" ");
console.log("Starting Rover Position: [0, 0]");

function esfera(rover) {
  if (rover.position[0]<0) {rover.position[0] = rover.position[0]+10}
  if (rover.position[1]<0) {rover.position[1] = rover.position[1]+10}
  if (rover.position[0]>9) {rover.position[0] = rover.position[0]-10}
  if (rover.position[1]>9) {rover.position[1] = rover.position[1]-10}
}
function obstacleForward(rover){
  console.log("Obstacle deteccion: [" + rover.position[0] + "," + rover.position[1] + "] ");
  goBack(rover);
  finish(rover);
}

function obstacleBackwards(rover){
  console.log("Obstacle deteccion: [" + rover.position[0] + "," + rover.position[1] + "] ");
  goForward(rover);
  finish(rover);
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      myRover.position[0]--;
      break;
    case 'E':
      myRover.position[1]++;
      break;
    case 'S':
      myRover.position[0]++;
      break;
    case 'W':
      myRover.position[1]--;
      break;
  }
  esfera(rover);

  if (myRover.position[0]===1 && myRover.position[1]===1){
    obstacleForward(rover);
  }

  if (myRover.position[0]===2 && myRover.position[1]===2){
    obstacleForward(rover);
  }

  if (myRover.position[0]===3 && myRover.position[1]===3){
    obstacleForward(rover);
  }

  console.log("New Rover Position: [" + rover.position[0] + "," + rover.position[1] + "] " +rover.direction);
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      myRover.position[0]++;
      break;
    case 'E':
      myRover.position[1]--;
      break;
    case 'S':
      myRover.position[0]--;
      break;
    case 'W':
      myRover.position[1]++;
      break;
  }

  esfera(rover);
  if (myRover.position[0]===1 && myRover.position[1]===1){
    obstacleBackwards(rover)(rover);
  }

  if (myRover.position[0]===2 && myRover.position[1]===2){
    obstacleBackwards(rover)(rover);
  }

  if (myRover.position[0]===3 && myRover.position[1]===3){
    obstacleBackwards(rover)(rover);
  }

  console.log("New Rover Position: [" + rover.position[0] + "," + rover.position[1] + "] " +rover.direction);
}

  function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      myRover.direction='E';
      break;
    case 'E':
      myRover.direction='S';
      break;
    case 'S':
      myRover.direction='W';
      break;
    case 'W':
      myRover.direction='N';
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + "," + rover.position[1] + "] " +rover.direction);
}

  function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      myRover.direction='W';
      break;
    case 'E':
      myRover.direction='N';
      break;
    case 'S':
      myRover.direction='E';
      break;
    case 'W':
      myRover.direction='S';
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + "," + rover.position[1] + "] "+ rover.direction);
}

var order = prompt ("Please, insert the instruccions: f - forward, b - backwards, l - left and r - right");

var stringLength = order.length;

for (i=0; i<=stringLength; i++){

  if (order[i]==="f"){
    console.log(" ");
    console.log("Forward");
    goForward(myRover);
  }
  else if (order[i]==="b"){
    console.log(" ");
    console.log("Backwards");
    goBack(myRover);
  }
  else if (order[i]==="r"){
    console.log(" ");
    console.log("Right");
    goRight(myRover);
  }
  else if (order[i]==="l"){
    console.log(" ");
    console.log("Left");
    goLeft(myRover);
  }
}



function finish(rover){
  console.log(" ");
  var a = myRover.position[0];
  var b = myRover.position[1];
  myGrid2[a][b]="R1";
  console.log(myGrid2);
  abord;
}
