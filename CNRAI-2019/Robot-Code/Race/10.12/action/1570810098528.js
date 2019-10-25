Blockly.Blocks['1570810098528'] = {
  init: function () {
    this.jsonInit({
      "type": "1570810098528",
      "message0": "整数模块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570810098528'] = function (block) {
  var code = "SPEED E\nMOVE 50 23 64 5A 5B 30 81 58 78 A5 64 5E 6B 92 4C 5C\nWAIT\nSPEED 1E\nMOVE 50 23 5A 56 69 55 64 5A 78 A5 5A 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 5A 56 71 25 9C 5A 78 A5 5A 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 5A 6B 64 38 7C 6E 78 A5 5A 70 81 9B 5D 6E\nWAIT\nSPEED 1E\nMOVE 50 23 6E 6A 5D 36 7B 6F 78 A5 6E 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 6E 6A 5D 36 7B 6E 78 A5 6E 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 6E 58 47 2D 6B 5A 78 A5 6E 5D 64 90 4C 5A\nWAIT\nSPEED 1E\nMOVE 50 23 5A 56 6E 5F 64 5A 78 A5 5A 5E 6B 92 4D 59\nWAIT\nSPEED 46\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['1570810098528'] = function (block) {
  var code = "robot.action('" + "整数模块" + "')\n";
  return code;
}

