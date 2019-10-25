Blockly.Blocks['1570817675143'] = {
  init: function () {
    this.jsonInit({
      "type": "1570817675143",
      "message0": "慢速右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570817675143'] = function (block) {
  var code = "SPEED 1B\nMOVE 50 1E 55 5F 7B 37 9A 5F 78 AA 55 69 89 91 6A 69\nWAIT\nSPEED 1E\nMOVE 50 1E 55 5F 7B 37 9A 5D 78 AA 55 69 89 91 6A 6B\nWAIT\nSPEED 1E\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 2 58\nSPEED 28\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['1570817675143'] = function (block) {
  var code = "robot.action('" + "慢速右转" + "')\n";
  return code;
}

