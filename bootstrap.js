var tsDelay = 0.833;

function send(cmd) {
  digitalPulse(B3, 0, [8 * tsDelay, ((cmd & 1 << 7) ? 4 : 1) * tsDelay,
    tsDelay, ((cmd & 1 << 6) ? 4 : 1) * tsDelay,
    tsDelay, ((cmd & 1 << 5) ? 4 : 1) * tsDelay,
    tsDelay, ((cmd & 1 << 4) ? 4 : 1) * tsDelay,
    tsDelay, ((cmd & 1 << 3) ? 4 : 1) * tsDelay,
    tsDelay, ((cmd & 1 << 2) ? 4 : 1) * tsDelay,
    tsDelay, ((cmd & 1 << 1) ? 4 : 1) * tsDelay,
    tsDelay, ((cmd & 1 << 0) ? 4 : 1) * tsDelay,
    tsDelay
  ]);
}

var turnRight = 0x80,
  rightArmUp = 0x81,
  rightArmOut = 0x82,
  tiltBodyRight = 0x83,
  rightArmDown = 0x84,
  rightArmIn = 0x85,
  walkForward = 0x86,
  walkBackward = 0x87,
  turnLeft = 0x88,
  leftArmUp = 0x89,
  leftArmOut = 0x8A,
  tiltBodyLeft = 0x8B,
  leftArmDown = 0x8C,
  leftArmIn = 0x8D,
  stopMoving = 0x8E,
  whistle = 0xCA,
  roar = 0xCE,
  burp = 0xC2;


