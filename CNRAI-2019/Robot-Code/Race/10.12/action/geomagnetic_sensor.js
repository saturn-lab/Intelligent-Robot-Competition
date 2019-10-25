Blockly.Blocks['geomagnetic_sensor'] = {
  init: function () {
    this.jsonInit({
      "type": "geomagnetic_sensor",
      "lastDummyAlign0": "RIGHT",
      "message0": "%{BKY_GEOMAGNETIC_SENSOR} %1 %2 ",
      "args0": [
        {
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
        },
        {
          "type": "field_number",
          "name": "number",
          "value": 0,
          "min": 0,
          "max": 360,
          "precision": 1
        }
      ],
      "output": "Boolean",
      "colour": "#36B7F4",
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['geomagnetic_sensor'] = function (block) {
  let code = '';
  const variable = "id-" + md5(block.id);
  const operation = block.getFieldValue("OP");

  let number = Number.parseInt(block.getFieldValue('number'), 10);
  let number_high = ((number >> 8) & 0xFF).toString(16).toUpperCase();
  let number_low = (number & 0xFF).toString(16).toLocaleUpperCase();

  code = code
    .concat(`INT ${variable}\n`)
    .concat(`ID 08 00 ${variable}\n`)
    .concat(`CMP 10 00 ${variable} ${number_high} ${number_low}\n`)
    .concat(`${operation}`);
    return [code, Blockly.JavaScript.ORDER_NONE];
}

Blockly.Python['geomagnetic_sensor'] = function (block) {
  const operations = {
    "JNE": "=",
    "JE": "\u2260",
    "JAE": "<",
    "JA": "\u200f\u2265\u200f",
    "JBE": ">",
    "JB": "\u200f\u2264\u200f",
  };
  const operation = operations[block.getFieldValue("OP")];
  const number = Number.parseInt(block.getFieldValue('number'), 10);
  let code = `aelosvars_geomagnetic_sensor ${operation} robot.geomagnetic_sensor(${number})`;
  return [code, Blockly.Python.ORDER_NONE];
}

