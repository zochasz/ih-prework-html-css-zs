var myGrid2 = [];
for (i=0; i<10; i++){
  myGrid2[i] = [];
  for (x=0; x<10; x++){
    myGrid2[i].push(x);
  }
}
console.log(myGrid2);

var myRover={
  position: [0,0],
  direction: 'N'
};

console.log(" ");
console.log("Starting Rover Position: [0, 0]")

function esfera(rover) {
  if (rover.position[0]<0) {rover.position[0] = rover.position[0]+10}
  if (rover.position[1]<0) {rover.position[1] = rover.position[1]+10}
  if (rover.position[0]>9) {rover.position[0] = rover.position[0]-10}
  if (rover.position[1]>9) {rover.position[1] = rover.position[1]-10}
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]--
      break;
  }
  esfera(rover);

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] " +rover.direction)
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]++
      break;
  }

  esfera(rover);

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] " +rover.direction)
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
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "] " +rover.direction)
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
  console.log("New Rover Position: [" + rover.position[0] + "," + rover.position[1] + "] "+ rover.direction)
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
