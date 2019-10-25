Blockly.Blocks['Turn_left'] = {
  init: function () {
    this.jsonInit({
      "type": "Turn_left",
      "message0": "%{BKY_TURN_LEFT}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#48BCBC',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['Turn_left'] = function (block) {
  var code = "SPEED 18\nMOVE 50 1E 73 5F 3F 37 5E 5F 78 AA 73 69 4D 91 2E 69\nWAIT\nSPEED 1E\nMOVE 50 1E 73 5F 3F 37 5E 5D 78 AA 73 69 4D 91 2E 6B\nWAIT\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 02 58\n";
  return code;
}

Blockly.Python['Turn_left'] = function (block) {
  var code = "robot.action('" + Blockly.Msg['TURN_LEFT'] + "')\n";
  return code;
}

