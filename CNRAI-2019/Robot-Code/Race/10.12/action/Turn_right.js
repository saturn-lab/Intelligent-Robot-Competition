Blockly.Blocks['Turn_right'] = {
  init: function () {
    this.jsonInit({
      "type": "Turn_right",
      "message0": "%{BKY_TURN_RIGHT}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#48BCBC',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['Turn_right'] = function (block) {
  var code = "SPEED 18\nMOVE 50 1E 55 5F 7B 37 9A 5F 78 AA 55 69 89 91 6A 69\nWAIT\nSPEED 1E\nMOVE 50 1E 55 5F 7B 37 9A 5D 78 AA 55 69 89 91 6A 6B\nWAIT\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 02 58\nSPEED 28\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['Turn_right'] = function (block) {
  var code = "robot.action('" + Blockly.Msg['TURN_RIGHT'] + "')\n";
  return code;
}

