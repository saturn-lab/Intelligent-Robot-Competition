const Blockly = global.Blockly;

Blockly.Blocks['1570810098528'] = {
  init: function() {
    this.jsonInit({
      "type": "1570810098528",
      "message0": "整数模块",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570810098528'] = function(block) {
  var code = "SPEED E\nMOVE 50 23 64 5A 5B 30 81 58 78 A5 64 5E 6B 92 4C 5C\nWAIT\nSPEED 1E\nMOVE 50 23 5A 56 69 55 64 5A 78 A5 5A 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 5A 56 71 25 9C 5A 78 A5 5A 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 5A 6B 64 38 7C 6E 78 A5 5A 70 81 9B 5D 6E\nWAIT\nSPEED 1E\nMOVE 50 23 6E 6A 5D 36 7B 6F 78 A5 6E 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 6E 6A 5D 36 7B 6E 78 A5 6E 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 6E 58 47 2D 6B 5A 78 A5 6E 5D 64 90 4C 5A\nWAIT\nSPEED 1E\nMOVE 50 23 5A 56 6E 5F 64 5A 78 A5 5A 5E 6B 92 4D 59\nWAIT\nSPEED 46\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['1570810098528'] = function(block) {
  var code = "robot.action('" + "整数模块" + "')\n";
  return code;
}



Blockly.Blocks['1570810620808'] = {
  init: function() {
    this.jsonInit({
      "type": "1570810620808",
      "message0": "自定义动作",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570810620808'] = function(block) {
  let code = "SPEED E\nMOVE 50 23 64 5A 5B 30 81 58 78 A5 64 5E 6B 92 4C 5C\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 73 5A 69 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 71 25 9C 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6F 78 A5 78 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 6E 5F 64 5A 78 A5 50 5E 6B 92 4D 59\nWAIT\nSPEED 46\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['1570810620808'] = function(block) {
  let code = "robot.action('" + "自定义动作" + "')\n";
  return code;
}



Blockly.Blocks['1570811182786'] = {
  init: function() {
    this.jsonInit({
      "type": "1570811182786",
      "message0": "A",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570811182786'] = function(block) {
  let code = "SPEED E\nMOVE 50 23 64 5A 5B 30 81 58 78 A5 64 5E 6B 92 4C 5C\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 7D 5D 6E 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 71 25 9C 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6F 78 A5 78 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 6E 5F 64 5A 78 A5 50 5E 6B 92 4D 59\nWAIT\n";
  return code;
}

Blockly.Python['1570811182786'] = function(block) {
  let code = "robot.action('" + "A" + "')\n";
  return code;
}



Blockly.Blocks['1570811422331'] = {
  init: function() {
    this.jsonInit({
      "type": "1570811422331",
      "message0": "A",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570811422331'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 23 50 56 7D 5D 6E 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 71 25 9C 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6F 78 A5 78 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 6E 5F 64 5A 78 A5 50 5E 6B 92 4D 59\nWAIT\n";
  return code;
}

Blockly.Python['1570811422331'] = function(block) {
  var code = "robot.action('" + "A" + "')\n";
  return code;
}



Blockly.Blocks['1570811611187'] = {
  init: function() {
    this.jsonInit({
      "type": "1570811611187",
      "message0": "有7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570811611187'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6F 78 A5 78 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 6E 5F 64 5A 78 A5 50 5E 6B 92 4D 59\nWAIT\n";
  return code;
}

Blockly.Python['1570811611187'] = function(block) {
  var code = "robot.action('" + "有7" + "')\n";
  return code;
}



Blockly.Blocks['1570811625659'] = {
  init: function() {
    this.jsonInit({
      "type": "1570811625659",
      "message0": "无7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570811625659'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6F 78 A5 78 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570811625659'] = function(block) {
  var code = "robot.action('" + "无7" + "')\n";
  return code;
}



Blockly.Blocks['1570812238462'] = {
  init: function() {
    this.jsonInit({
      "type": "1570812238462",
      "message0": "无7 改1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570812238462'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 82 25 AD 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6F 78 A5 78 72 5A 69 64 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 5A A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570812238462'] = function(block) {
  var code = "robot.action('" + "无7 改1" + "')\n";
  return code;
}



Blockly.Blocks['1570813041915'] = {
  init: function() {
    this.jsonInit({
      "type": "1570813041915",
      "message0": "大改",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570813041915'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570813041915'] = function(block) {
  var code = "robot.action('" + "大改" + "')\n";
  return code;
}



Blockly.Blocks['1570813115460'] = {
  init: function() {
    this.jsonInit({
      "type": "1570813115460",
      "message0": "综合",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570813115460'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 1E\nMOVE 50 23 50 56 82 25 AD 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 1E\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 1E\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570813115460'] = function(block) {
  var code = "robot.action('" + "综合" + "')\n";
  return code;
}



Blockly.Blocks['1570813583758'] = {
  init: function() {
    this.jsonInit({
      "type": "1570813583758",
      "message0": "无7 加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570813583758'] = function(block) {
  var code = "SPEED 32\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 32\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED 14\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 32\nMOVE 50 23 78 6A 5D 36 7B 6F 78 A5 78 72 5A 69 64 6E\nWAIT\nSPEED 32\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED 14\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570813583758'] = function(block) {
  var code = "robot.action('" + "无7 加速" + "')\n";
  return code;
}



Blockly.Blocks['1570813728429'] = {
  init: function() {
    this.jsonInit({
      "type": "1570813728429",
      "message0": "大改 加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570813728429'] = function(block) {
  var code = "SPEED 32\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 32\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED 14\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 32\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 32\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED 14\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570813728429'] = function(block) {
  var code = "robot.action('" + "大改 加速" + "')\n";
  return code;
}



Blockly.Blocks['1570815887136'] = {
  init: function() {
    this.jsonInit({
      "type": "1570815887136",
      "message0": "速度稍慢",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570815887136'] = function(block) {
  var code = "SPEED 2D\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 2D\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED F\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 2D\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 2D\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED F\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570815887136'] = function(block) {
  var code = "robot.action('" + "速度稍慢" + "')\n";
  return code;
}



Blockly.Blocks['1570817623378'] = {
  init: function() {
    this.jsonInit({
      "type": "1570817623378",
      "message0": "慢速左转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570817623378'] = function(block) {
  var code = "SPEED 1B\nMOVE 50 1E 73 5F 3F 37 5E 5F 78 AA 73 69 4D 91 2E 69\nWAIT\nSPEED 1E\nMOVE 50 1E 73 5F 3F 37 5E 5D 78 AA 73 69 4D 91 2E 6B\nWAIT\nSPEED 1E\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 2 58\n";
  return code;
}

Blockly.Python['1570817623378'] = function(block) {
  var code = "robot.action('" + "慢速左转" + "')\n";
  return code;
}



Blockly.Blocks['1570817675143'] = {
  init: function() {
    this.jsonInit({
      "type": "1570817675143",
      "message0": "慢速右转",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570817675143'] = function(block) {
  var code = "SPEED 1B\nMOVE 50 1E 55 5F 7B 37 9A 5F 78 AA 55 69 89 91 6A 69\nWAIT\nSPEED 1E\nMOVE 50 1E 55 5F 7B 37 9A 5D 78 AA 55 69 89 91 6A 6B\nWAIT\nSPEED 1E\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 2 58\nSPEED 28\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['1570817675143'] = function(block) {
  var code = "robot.action('" + "慢速右转" + "')\n";
  return code;
}



Blockly.Blocks['1570845158827'] = {
  init: function() {
    this.jsonInit({
      "type": "1570845158827",
      "message0": "原慢走加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570845158827'] = function(block) {
  var code = "SPEED 14\nMOVE 50 23 64 5A 5B 30 81 58 78 A5 64 5E 6B 92 4C 5C\nWAIT\nSPEED 32\nMOVE 50 23 5A 56 69 55 64 5A 78 A5 5A 5E 6B 92 4E 57\nWAIT\nSPEED 32\nMOVE 50 23 5A 56 71 25 9C 5A 78 A5 5A 5E 6B 92 4D 5A\nWAIT\nSPEED 14\nMOVE 50 23 5A 6B 64 38 7C 6E 78 A5 5A 70 81 9B 5D 6E\nWAIT\nSPEED 32\nMOVE 50 23 6E 6A 5D 36 7B 6F 78 A5 6E 72 5A 69 64 6E\nWAIT\nSPEED 32\nMOVE 50 23 6E 6A 5D 36 7B 6E 78 A5 6E 72 57 A3 2C 6E\nWAIT\nSPEED 14\nMOVE 50 23 6E 58 47 2D 6B 5A 78 A5 6E 5D 64 90 4C 5A\nWAIT\nSPEED 32\nMOVE 50 23 5A 56 6E 5F 64 5A 78 A5 5A 5E 6B 92 4D 59\nWAIT\nSPEED 46\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\n";
  return code;
}

Blockly.Python['1570845158827'] = function(block) {
  var code = "robot.action('" + "原慢走加速" + "')\n";
  return code;
}



Blockly.Blocks['1570847650938'] = {
  init: function() {
    this.jsonInit({
      "type": "1570847650938",
      "message0": "加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570847650938'] = function(block) {
  var code = "SPEED 96\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 96\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED 64\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 96\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 96\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED 64\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570847650938'] = function(block) {
  var code = "robot.action('" + "加速" + "')\n";
  return code;
}



Blockly.Blocks['1570847893255'] = {
  init: function() {
    this.jsonInit({
      "type": "1570847893255",
      "message0": "新速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570847893255'] = function(block) {
  var code = "SPEED 64\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 64\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED 28\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 64\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 64\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED 28\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570847893255'] = function(block) {
  var code = "robot.action('" + "新速" + "')\n";
  return code;
}



Blockly.Blocks['1570848118627'] = {
  init: function() {
    this.jsonInit({
      "type": "1570848118627",
      "message0": "新2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570848118627'] = function(block) {
  var code = "SPEED 3C\nMOVE 50 23 50 56 82 5D 73 5A 78 A5 50 5E 6B 92 4E 57\nWAIT\nSPEED 3C\nMOVE 50 23 50 56 78 25 A3 5A 78 A5 50 5E 6B 92 4D 5A\nWAIT\nSPEED 14\nMOVE 50 23 50 6B 64 38 7C 6E 78 A5 50 70 8C 96 58 6E\nWAIT\nSPEED 3C\nMOVE 50 23 78 54 5D 36 7B 70 78 A5 78 5F 5A 69 68 75\nWAIT\nSPEED 3C\nMOVE 50 23 78 6A 5D 36 7B 6E 78 A5 78 72 57 A3 2C 6E\nWAIT\nSPEED 14\nMOVE 50 23 78 58 47 2D 6B 5A 78 A5 78 5D 64 90 4C 5A\nWAIT\n";
  return code;
}

Blockly.Python['1570848118627'] = function(block) {
  var code = "robot.action('" + "新2" + "')\n";
  return code;
}



Blockly.Blocks['1570853577093'] = {
  init: function() {
    this.jsonInit({
      "type": "1570853577093",
      "message0": "延迟站立",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570853577093'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 7 D0\n";
  return code;
}

Blockly.Python['1570853577093'] = function(block) {
  var code = "robot.action('" + "延迟站立" + "')\n";
  return code;
}



Blockly.Blocks['1570853601184'] = {
  init: function() {
    this.jsonInit({
      "type": "1570853601184",
      "message0": "延迟",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript['1570853601184'] = function(block) {
  var code = "SPEED 1E\nMOVE 50 1E 64 64 5D 37 7C 64 78 AA 64 64 6B 91 4C 64\nWAIT\nDELAY 7 D0\n";
  return code;
}

Blockly.Python['1570853601184'] = function(block) {
  var code = "robot.action('" + "延迟" + "')\n";
  return code;
}



