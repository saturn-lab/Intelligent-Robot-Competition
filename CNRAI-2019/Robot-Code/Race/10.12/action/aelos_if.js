Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      "type": "aelos_if",
      "message0": "%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2",
      "args0": [
        {
          "type": "input_value",
          "name": "condition",
          "check": "Boolean"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['aelos_if'] = function (block) {
  var jmp_id = "id-" + md5(block.id);

  var condition = (Blockly.JavaScript.valueToCode(block, "condition", Blockly.JavaScript.ORDER_NONE) || "JMP") + " " + jmp_id + "\n";
  var do_code = Blockly.JavaScript.statementToCode(block, "do");

  var code = `${condition}${do_code}LABEL ${jmp_id}\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  var condition = Blockly.Python.valueToCode(block, "condition", Blockly.Python.ORDER_NONE) || "FALSE";
  var do_code = Blockly.Python.statementToCode(block, "do") || "  pass\n";

  var code = `if ${condition}:\n${do_code}`;
  return code;
}

