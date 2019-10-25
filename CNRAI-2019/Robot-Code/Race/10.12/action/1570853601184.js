Blockly.Blocks['1570853601184'] = {
  init: function () {
    this.jsonInit({
      "type": "1570853601184",
      "message0": "延迟",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570853601184'] = function (block) {
  var code = "SPEED 1E\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 7 D0\n";
  return code;
}

Blockly.Python['1570853601184'] = function (block) {
  var code = "robot.action('" + "延迟" + "')\n";
  return code;
}

