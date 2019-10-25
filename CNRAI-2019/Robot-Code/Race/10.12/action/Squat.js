Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      "type": "Squat",
      "message0": "%{BKY_SQUAT}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#48BCBC',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['Squat'] = function (block) {
  var code = "SPEED 0E\nMOVE 50 1E 64 64 8E 91 4D 64 78 AA 64 64 3A 37 7B 64\nWAIT\nDELAY 01 F4\nSPEED 28\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['Squat'] = function (block) {
  var code = "robot.action('" + Blockly.Msg['SQUAT'] + "')\n";
  return code;
}

