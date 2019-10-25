Blockly.Blocks['Shake_hand'] = {
  init: function () {
    this.jsonInit({
      "type": "Shake_hand",
      "message0": "%{BKY_SHAKE_HAND}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#48BCBC',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['Shake_hand'] = function (block) {
  var code = "MOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nMOVE 50 1E 64 64 5D 37 7C 64 8D B5 26 64 6B 91 4C 64\nWAIT\nSPEED 0C\nMOVE 50 1E 64 64 5D 37 7C 64 8D B5 33 64 6B 91 4C 64\nWAIT\nMOVE 50 1E 64 64 5D 37 7C 64 8D B5 26 64 6B 91 4C 64\nWAIT\nSPEED 0C\nMOVE 50 1E 64 64 5D 37 7C 64 8D B5 33 64 6B 91 4C 64\nWAIT\nMOVE 50 1E 64 64 5D 37 7C 64 8D B5 26 64 6B 91 4C 64\nWAIT\nSPEED 0C\nMOVE 50 1E 64 64 5D 37 7C 64 8D B5 33 64 6B 91 4C 64\nWAIT\nMOVE 50 1E 64 64 5D 37 7C 64 8D B5 26 64 6B 91 4C 64\nWAIT\nSPEED 23\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['Shake_hand'] = function (block) {
  var code = "robot.action('" + Blockly.Msg['SHAKE_HAND'] + "')\n";
  return code;
}

