Blockly.Blocks['sensor'] = {
  init: function () {
    this.jsonInit({
      "type": "sensor",
      "message0": "%{BKY_SENSOR} %1 %{BKY_SENSOR_PORT} %2 %{BKY_SENSOR_VAR} %3",
      "args0": [{
        "type": "input_dummy"
      },{
        "type": "field_dropdown",
        "name": "port",
        "options": [
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ],
          [
            "5",
            "5"
          ],
          [
            "8",
            "8"
          ]
        ]
      },{
        "type": "input_value",
        "name": "variable",
        "check": "Variable"
      }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#36B7F4',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['sensor'] = function (block){
  var variable = Blockly.JavaScript.valueToCode(block, "variable", Blockly.JavaScript.ORDER_NONE);
  var port = block.getFieldValue("port");
  var code = "";
  if(port && variable){
    port = Blockly.JavaScript.transferHex(port, 1);
    code = `ASSIGNMENT 10 00 ${variable} 00 00\nID ${port} 00 ${variable}\n`;
  }

  return code;
}

Blockly.Python['sensor'] = function (block){
  var port = block.getFieldValue("port");
  var variable = Blockly.Python.valueToCode(block, "variable", Blockly.Python.ORDER_NONE);
  var code = "";
  if(port && variable){
    code = `${variable} = robot.sensor(${port})\n`;
  } else {
    code = `robot.sensor(None)\n`;
  }

  return code;
}

