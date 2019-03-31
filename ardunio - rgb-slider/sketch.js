var serial; // variable to hold an instance of the serialport library
var portName = "COM6";

var inData;

var xPos = 0;
var rSlider, gSlider, bSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0x08, 0x16, 0x40);

  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 80);

  var options = { baudrate: 9600 };

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", serialEvent); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
}

function draw() {
  frameRate(10);

  var r = rSlider.value();

  var g = gSlider.value();

  var b = bSlider.value();

  background(r, g, b);

  if (r <= 9) {
    r = "0" + "0" + r;
  } else if (r <= 99) {
    r = "0" + r;
  } else {
    r = "" + r;
  }
  if (g <= 9) {
    g = "0" + "0" + g;
  } else if (g <= 99) {
    g = "0" + g;
  } else {
    g = "" + g;
  }
  if (b <= 9) {
    b = "0" + "0" + b;
  } else if (b <= 99) {
    b = "0" + b;
  } else {
    b = "" + b;
  }
  print(r + g + b);
  serial.write(r + g + b);

  fill(255);
  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);
}

// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    print(i + " " + portList[i]);
  }
}
function serverConnected() {
  print("connected to server.");
}

function portOpen() {
  print("the serial port opened.");
}

function serialEvent() {
  // serial.write(255);
}

function serialError(err) {
  print("Something went wrong with the serial port. " + err);
}

function portClose() {
  print("The serial port closed.");
}
