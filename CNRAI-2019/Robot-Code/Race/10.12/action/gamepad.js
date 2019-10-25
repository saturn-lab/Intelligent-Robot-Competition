Blockly.Blocks['gamepad'] = {
  init: function () {
    this.jsonInit({
      "type": "gamepad",
      "message0": "%{BKY_GAMEPAD} %1 %{BKY_GAMEPAD_VAR} %2",
      "args0": [{
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "variable",
        "check": "Variable"
      }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#36B7F4',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['gamepad'] = function (block) {
  var variable = Blockly.JavaScript.valueToCode(block, "variable", Blockly.JavaScript.ORDER_NONE);
  var code = "";
  if(variable) {
    var jmp_id_1 = "id-" + md5(block.id) + "-1";
    var jmp_id_2 = "id-" + md5(block.id) + "-2";
    code = `ASSIGNMENT 10 00 ${variable} 00 00\nLABEL ${jmp_id_1}\nCMP 10 00 ${variable} 00 00\nJNE ${jmp_id_2}\nRX ${variable}\nJMP ${jmp_id_1}\nLABEL ${jmp_id_2}\n`;
  }

  return code;
}

Blockly.Python['gamepad'] = function (block) {
  var variable = Blockly.Python.valueToCode(block, "variable", Blockly.Python.ORDER_NONE);
  var code = "";
  if(variable) {
    code = `${variable} = robot.remote()\n`;
  } else {
    code = `robot.remote(None)\n`;
  }

  return code;
}

