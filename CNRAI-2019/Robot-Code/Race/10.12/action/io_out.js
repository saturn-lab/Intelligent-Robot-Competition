Blockly.Blocks['io_out'] = {
  init: function () {
    this.jsonInit({
      "type": "io_out",
      "message0": "%{BKY_IO_OUTPUT} %1 %{BKY_IO_OUTPUT_PORT} %2",
      "args0": [{
        "type": "field_dropdown",
        "name": "output_value",
        "options": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ]
        ]
      }, {
        "type": "field_dropdown",
        "name": "port",
        "options": [
          [
            "1",
            "1"
          ]
        ]
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#36B7F4',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['io_out'] = function (block) {
  var code = '';
  var port = block.getFieldValue("port");
  var output_value = block.getFieldValue("output_value");

  if(port && output_value){
    port = Blockly.JavaScript.transferHex(port, 1);
    output_value = Blockly.JavaScript.transferHex(output_value, 1);
    code = `IOout ${port} ${output_value}\n`;
  }

  return code;
}

Blockly.Python['io_out'] = function (block) {
  var code = '';
  var port = block.getFieldValue("port");
  var output_value = block.getFieldValue("output_value");

  code = `robot.output(${port}, ${output_value})\n`;
  return code;
}

