Blockly.Blocks['start'] = {
  init: function () {
    this.jsonInit({
      "type": "start",
      "message0": "%{BKY_START} %1 %2",
      "args0": [{
        "type": "input_dummy"
      }, {
        "type": "input_statement",
        "name": "do"
      }],
      "colour": '#86C113',
      "tooltip": "",
      "helpUrl": ""
    });
    this.setDeletable(false);
  }
};

Blockly.JavaScript['start'] = function (block) {
  var do_code = Blockly.JavaScript.statementToCode(block, "do");
  var code = `${do_code}RET`;

  return code;
}

Blockly.Python['start'] = function (block) {
  var do_code = Blockly.Python.statementToCode(block, "do");
  var code = `import aelossdk\nfrom aelosvars import *\nrobot = aelossdk.init()\n\n${do_code}`;

  return code;
}

