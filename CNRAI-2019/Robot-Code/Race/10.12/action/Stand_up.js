Blockly.Blocks['Stand_up'] = {
  init: function () {
    this.jsonInit({
      "type": "Stand_up",
      "message0": "%{BKY_STAND_UP}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#48BCBC',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['Stand_up'] = function (block) {
  var code = "MOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['Stand_up'] = function (block) {
  var code = "robot.action('" + Blockly.Msg['STAND_UP'] + "')\n";
  return code;
}

