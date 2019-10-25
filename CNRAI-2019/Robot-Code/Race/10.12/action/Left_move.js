Blockly.Blocks['Left_move'] = {
  init: function () {
    this.jsonInit({
      "type": "Left_move",
      "message0": "%{BKY_LEFT_MOVE}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#48BCBC',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['Left_move'] = function (block) {
  var code = "SPEED 32\nMOVE 50 28 64 5A 69 50 6E 5A 78 A0 64 6B 6B 92 4C 64\nWAIT\nSPEED 3C\nMOVE 50 1E 64 64 5D 35 7C 66 78 AA 64 73 68 8C 4E 75\nWAIT\nSPEED 32\nMOVE 50 1E 64 64 5D 36 7C 62 78 AA 64 64 6B 92 4C 66\nWAIT\n";
  return code;
}

Blockly.Python['Left_move'] = function (block) {
  var code = "robot.action('" + Blockly.Msg['LEFT_MOVE'] + "')\n";
  return code;
}

