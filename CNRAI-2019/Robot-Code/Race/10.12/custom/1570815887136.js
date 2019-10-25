Blockly.Blocks['1570815887136'] = {
  init: function() {
    this.jsonInit({
      "type": "1570815887136",
      "message0": "速度稍慢",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570815887136'] = function(block) {
  var code = "SPEED 2D\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 2D\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 2D\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 2D\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570815887136'] = function(block) {
  var code = "robot.action('" + "速度稍慢" + "')\n";
  return code;
}

