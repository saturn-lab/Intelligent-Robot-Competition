Blockly.Blocks['1570817623378'] = {
  init: function () {
    this.jsonInit({
      "type": "1570817623378",
      "message0": "慢速左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570817623378'] = function (block) {
  var code = "SPEED 1B\nMOVE 50 1E 73 5F 3F 37 5E 5F 78 AA 73 69 4D 91 2E 69\nWAIT\nSPEED 1E\nMOVE 50 1E 73 5F 3F 37 5E 5D 78 AA 73 69 4D 91 2E 6B\nWAIT\nSPEED 1E\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 2 58\n";
  return code;
}

Blockly.Python['1570817623378'] = function (block) {
  var code = "robot.action('" + "慢速左转" + "')\n";
  return code;
}

