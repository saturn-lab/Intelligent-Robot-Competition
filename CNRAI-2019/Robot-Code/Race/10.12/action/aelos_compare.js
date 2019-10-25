Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      "type": "aelos_compare",
      "message0": "%1 %2 %3",
      "args0": [{
        "type": "input_value",
        "name": "input_1",
        "check": ["Number", "Variable"]
      }, {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          [
            "=",
            "JNE"
          ],
          [
            "\u2260",
            "JE"
          ],
          [
            "<",
            "JAE"
          ],
          [
            "\u200f\u2265\u200f",
            "JA"
          ],
          [
            ">",
            "JBE"
          ],
          [
            "\u200f\u2264\u200f",
            "JB"
          ]
        ]
      }, {
        "type": "input_value",
        "name": "input_2",
        "check": ["Number", "Variable"]
      }],
      "inputsInline": true,
      "output": "Boolean",
      "colour": '#86C113',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['aelos_compare'] = function (block) {
  var input_1 = Blockly.JavaScript.valueToCode(block, "input_1", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var input_2 = Blockly.JavaScript.valueToCode(block, "input_2", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var operation = block.getFieldValue("OP");

  //判断操作数类型
  var result1 = Blockly.JavaScript.judgeElement(input_1);
  var result2 = Blockly.JavaScript.judgeElement(input_2);

  var code = `CMP ${result1.code}${result2.code} ${result1.element} ${result2.element}\n${operation}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  var op_map = {
    "JNE": "==",
    "JE": "!=",
    "JAE": "<",
    "JA": "<=",
    "JBE": ">",
    "JB": ">="
  };
  var input_1 = Blockly.Python.valueToCode(block, "input_1", Blockly.Python.ORDER_ATOMIC);
  var input_2 = Blockly.Python.valueToCode(block, "input_2", Blockly.Python.ORDER_ATOMIC);
  var operation = op_map[block.getFieldValue("OP")];
  var code = "";

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = "FALSE";
  }

  return [code, Blockly.Python.ORDER_NONE];
}

