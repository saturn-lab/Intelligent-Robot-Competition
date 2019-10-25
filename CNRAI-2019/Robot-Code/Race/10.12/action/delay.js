Blockly.Blocks['delay'] = {
  init: function () {
    this.jsonInit({
      "type": "delay",
      "message0": "%{BKY_DELAY} %1 %{BKY_DELAY_TIME}",
      "args0": [
        {
          "type": "field_number",
          "name": "delay",
          "value": 0,
          "min": 0,
          "max": 9999,
          "precision": 1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#36B7F4',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['delay'] = function (block) {
  var code = "";
  
  var delayms = parseInt(block.getFieldValue("delay"), 0);
  if (!isNaN(delayms)) {
    if (delayms > 9999) {
      delayms = 9999;
    }
    var delayms_high, delayms_low;
    while (delayms >= 4000) {
      delayms_high = (4000 >> 8) & 0xff;
      delayms_low = (4000) & 0xff;
      code = code + `DELAY ${delayms_high.toString(16).toUpperCase()} ${delayms_low.toString(16).toUpperCase()}\n`;
      delayms = delayms - 4000;
    }
    if (delayms > 0) {
      delayms_high = (delayms >> 8) & 0xff;
      delayms_low = (delayms) & 0xff;
      code = code + `DELAY ${delayms_high.toString(16).toUpperCase()} ${delayms_low.toString(16).toUpperCase()}\n`;
    }
  }
  
  return code;
}

Blockly.Python['delay'] = function (block) {
  var code = "";
  // var delayms = parseInt(Blockly.JavaScript.valueToCode(block, "delay", Blockly.JavaScript.ORDER_NONE), 0);
  var delayms = block.getFieldValue("delay");

  code = `robot.delayms(${delayms})\n`;
  
  return code;
}

