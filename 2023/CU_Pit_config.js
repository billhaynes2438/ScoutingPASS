var config_data = `
{
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Length",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Floor pickup",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Source pickup",
      "code": "spu",
      "type": "bool"
    },
    { "name": "Cross Charging Station",
      "code": "ccs",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 note<br>",
        "2": "2 note<br>",
        "3": "3 note<br>",
        "4": "4 note<br>",
        "5": "5 note<br>",
        "6": "6 note<br>",
        "7": "7 note<br>",
        "pl": "preload only<br>",
        "x": "No auto"
      },
      "defaultValue":"x"
    },
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
