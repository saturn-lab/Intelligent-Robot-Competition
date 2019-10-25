Blockly.Blocks['math_number_limit'] = {
  init: function () {
    this.jsonInit({
      "type": "math_number_limit",
      "message0": "%1",
      "args0": [{
        "type": "field_number",
        "name": "NUM",
        "value": 0,
        "min": 0,
        "max": 255,
        "precision": 1
      }],
      "output": "Number",
      "colour": '#FF5064',
      "helpUrl": "%{BKY_MATH_NUMBER_HELPURL}",
      "tooltip": "%{BKY_MATH_NUMBER_TOOLTIP}",
      "extensions": ["parent_tooltip_when_inline"]
    });
  }
};

Blockly.JavaScript['math_number_limit'] = function (block) {
  const num = parseInt(block.getFieldValue("NUM"));
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['math_number_limit'] = function (a) {
	a = parseFloat(a.getFieldValue("NUM"));
	if (Infinity == a) {
		a = 'float("inf")';
		var b = Blockly.Python.ORDER_FUNCTION_CALL
	} else -Infinity == a ? (a = '-float("inf")', b = Blockly.Python.ORDER_UNARY_SIGN) : b = 0 > a ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC;
	return [a, b]
}

