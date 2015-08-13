var _ = require('lodash');
var SerialPort = require('serialport').SerialPort;
var serialPort = new SerialPort('/dev/cu.HC-05-DevB', {
  baudrate: 57600
}, false);
fs = require('fs');
async = require('async');

var boot = fs.readFileSync('./bootstrap.js');

serialPort.open(function(error) {
  if (error) {
    console.error(error);
  } else {
    serialPort.write(boot, function(err, results) {
      if (err) {
        console.error(error);
      }

      booted();
    });
  }
});

var commands = {
  turnRight: 0x80,
  rightArmUp: 0x81,
  rightArmOut: 0x82,
  tiltBodyRight: 0x83,
  rightArmDown: 0x84,
  rightArmIn: 0x85,
  walkForward: 0x86,
  walkBackward: 0x87,
  turnLeft: 0x88,
  leftArmUp: 0x89,
  leftArmOut: 0x8A,
  tiltBodyLeft: 0x8B,
  leftArmDown: 0x8C,
  leftArmIn: 0x8D,
  stopMoving: 0x8E,
  whistle: 0xCA,
  roar: 0xCE,
  burp: 0xC2,
  fart: 0xC7
};

function robot(cmd, done) {
  console.log('send', cmd);
  return serialPort.write('send(' + cmd + ')\n', function() {
    return setTimeout(done, 5000);
  });
}

function random() {
  var result;
  var count = 0;
  for (var prop in commands)
    if (Math.random() < 1 / ++count)
      result = prop;
  console.log('random', result);
  return commands[result];
}

function booted() {
  setInterval(function() {
    var cmd = random();
    serialPort.write('send(' + cmd + ')\n');
  }, 2000);

  /*
  async.series([
     async.apply(robot, commands.turnRight),
     async.apply(robot, commands.turnLeft),
     async.apply(robot, commands.walkForward),
     async.apply(robot, commands.stopMoving)
   ], function() {});
  */
}
