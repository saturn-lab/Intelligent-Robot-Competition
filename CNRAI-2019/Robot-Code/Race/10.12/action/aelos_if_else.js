Blockly.Blocks['aelos_if_else'] = {
  init: function () {
    this.jsonInit({
      "type": "aelos_if_else",
      "message0": "%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2 %{BKY_AELOS_ELSE} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "condition",
          "check": "Boolean"
        },
        {
          "type": "input_statement",
          "name": "if_do"
        },
        {
          "type": "input_statement",
          "name": "else_do"
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

Blockly.JavaScript['aelos_if_else'] = function (block) {
  var jmp_id_1 = "id-" + md5(block.id) + "-1";
  var jmp_id_2 = "id-" + md5(block.id) + "-2";
  var code = "";

  var condition = Blockly.JavaScript.valueToCode(block, "condition", Blockly.JavaScript.ORDER_NONE) || "JMP";
  var if_do = Blockly.JavaScript.statementToCode(block, "if_do") || "";
  var else_do = Blockly.JavaScript.statementToCode(block, "else_do") || "";
  if(if_do && else_do){
    code = `${condition} ${jmp_id_1}\n${if_do}JMP ${jmp_id_2}\nLABEL ${jmp_id_1}\n${else_do}LABEL ${jmp_id_2}\n`;
  } else {
    code = `${condition} ${jmp_id_1}\n${if_do || else_do}LABEL ${jmp_id_1}\n`;
  }

  return code;
}

Blockly.Python['aelos_if_else'] = function (block) {
  var condition = Blockly.Python.valueToCode(block, "condition", Blockly.Python.ORDER_NONE) || "FALSE";
  var if_do = Blockly.Python.statementToCode(block, "if_do") || "  pass\n";
  var else_do = Blockly.Python.statementToCode(block, "else_do") || "  pass\n";

  var code = `if ${condition}:\n${if_do}else:\n${else_do}`;
  return code;
}

