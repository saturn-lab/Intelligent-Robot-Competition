Blockly.Blocks['Right_move'] = {
  init: function () {
    this.jsonInit({
      "type": "Right_move",
      "message0": "%{BKY_RIGHT_MOVE}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#48BCBC',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['Right_move'] = function (block) {
  var code = "SPEED 32\nMOVE 50 28 64 5D 5D 36 7C 64 78 A0 64 6E 5F 78 5A 6E\nWAIT\nSPEED 3C\nMOVE 50 1E 64 55 60 3C 7A 53 78 AA 64 64 6B 93 4C 62\nWAIT\nSPEED 32\nMOVE 50 1E 64 64 5D 36 7C 62 78 AA 64 64 6B 92 4C 66\nWAIT\n";
  return code;
}

Blockly.Python['Right_move'] = function (block) {
  var code = "robot.action('" + Blockly.Msg['RIGHT_MOVE'] + "')\n";
  return code;
}

