Blockly.Blocks['aelos_for'] = {
  init: function () {
    this.jsonInit({
      "type": "aelos_for",
      "message0": "%{BKY_AELOS_LOOP} %1 %{BKY_AELOS_LOOP_TIMES} %2 %{BKY_AELOS_DO} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "times",
          "check": ["Number", "Variable"]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['aelos_for'] = function (block) {
  var code = "";

  var times = parseInt(Blockly.JavaScript.valueToCode(block, "times", Blockly.JavaScript.ORDER_NONE), 0);
  var do_code = Blockly.JavaScript.statementToCode(block, "do");
  if(!isNaN(times) && do_code && (times !== 0)){
    for(let i = 0; i < times; i++){
      let target = do_code.toString();
      let result = target.match(/(JNE|JE|JAE|JA|JB|JBE|JMP|LABEL) (id-[0-9a-zA-Z]{32}|id-[0-9a-zA-Z-]{36})/gi);
      if (result) {
        const uuids = result.map(item => item.toString().split(' ')[1]);
        const labels = Array.from(new Set(uuids));
        labels.map((item) => {
          let uuid = generateUUID();
          target = target.replace(new RegExp(item, 'g'), `id-${uuid}`);
        })
      }
      code = code + target + "\n";
    }
  }
  return code;
}

Blockly.Python['aelos_for'] = function (block) {
  var times = Blockly.Python.valueToCode(block, "times", Blockly.Python.ORDER_NONE) || "0";
  var do_code = Blockly.Python.statementToCode(block, "do") || "  pass\n";

  var code = `for i in range(${times}):\n${do_code}`;

  return code;
}

