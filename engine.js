[{
    "id": "6fd348e6.c9aa88",
    "type": "delay",
    "z": "97c8f1ac.990b8",
    "name": "Delay",
    "pauseType": "random",
    "timeout": "3",
    "timeoutUnits": "seconds",
    "rate": "1",
    "nbRateUnits": "1",
    "rateUnits": "second",
    "randomFirst": "10",
    "randomLast": "30",
    "randomUnits": "seconds",
    "drop": true,
    "x": 510,
    "y": 400,
    "wires": [
        ["c273e3f9.b2edd"]
    ]
}, {
    "id": "9d712890.513258",
    "type": "exec",
    "z": "97c8f1ac.990b8",
    "command": "python phoenix/randomNumber.py 0 4",
    "addpay": false,
    "append": "",
    "useSpawn": "false",
    "timer": "",
    "oldrc": false,
    "name": "rand motor",
    "x": 250,
    "y": 220,
    "wires": [
        ["13fa5bcd.8a8724"],
        [],
        []
    ]
}, {
    "id": "13fa5bcd.8a8724",
    "type": "function",
    "z": "97c8f1ac.990b8",
    "name": "",
    "func": "msg.motor = msg.payload[0];\nvar speeds = global.get('speeds');\nvar data = global.get('motor_data');\n\nvar gear = data[msg.motor];\nvar min = speeds[gear - 1][0];\nvar max = speeds[gear - 1][1];\n\nmsg.payload = \" \" + min + \" \" + max;\nmsg.mtdt = data;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 430,
    "y": 120,
    "wires": [
        ["b8e099fa.27bbc8", "a01648e5.b673d8"]
    ]
}, {
    "id": "cddc5ea1.95f2b",
    "type": "function",
    "z": "97c8f1ac.990b8",
    "name": "Set motor Data",
    "func": "var data = global.get('motor_data');\nif(!data) {\n    global.set('motor_data', {\n        \"0\": \"1\",\n        \"1\": \"1\",\n        \"2\": \"1\",\n        \"3\": \"1\",\n        \"4\": \"1\"\n    });\n}\nvar speeds = global.get('speeds');\nif(!speeds) {\n    global.set('speeds', [[452, 592],[313, 451],[176, 312],[37, 175]]);\n}\nmsg.payload = {\n    'speeds': speeds,\n    \"motors\": data\n}\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 240,
    "y": 20,
    "wires": [
        ["9d712890.513258"]
    ]
}, {
    "id": "b8e099fa.27bbc8",
    "type": "exec",
    "z": "97c8f1ac.990b8",
    "command": "python phoenix/randomNumber.py",
    "addpay": true,
    "append": "",
    "useSpawn": "false",
    "timer": "",
    "oldrc": false,
    "name": "rand speed",
    "x": 570,
    "y": 180,
    "wires": [
        ["466714ab.3063ec"],
        [],
        []
    ]
}, {
    "id": "466714ab.3063ec",
    "type": "function",
    "z": "97c8f1ac.990b8",
    "name": "",
    "func": "msg.newSpeed = msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 690,
    "y": 280,
    "wires": [
        ["6fd348e6.c9aa88"]
    ]
}, {
    "id": "c273e3f9.b2edd",
    "type": "function",
    "z": "97c8f1ac.990b8",
    "name": "Parse",
    "func": "msg.newSpeedParsed = 556 - (msg.newSpeed - 37);\n\nif(msg.newSpeed % 2) {\n    msg.newSpeed = 1149 - (msg.newSpeed - 37);\n}\nmsg.payload = msg.motor + \" \" + msg.newSpeed;\n//msg.reset = true;\nreturn msg;",
    "outputs": "1",
    "noerr": 0,
    "x": 250,
    "y": 540,
    "wires": [
        ["294bda05.dd3d26", "7973464d.0f1c18", "9d712890.513258"]
    ]
}, {
    "id": "2ac56cc7.8ee5d4",
    "type": "inject",
    "z": "97c8f1ac.990b8",
    "name": "start",
    "topic": "",
    "payload": "true",
    "payloadType": "bool",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 90,
    "y": 20,
    "wires": [
        ["cddc5ea1.95f2b"]
    ]
}, {
    "id": "294bda05.dd3d26",
    "type": "serial out",
    "z": "97c8f1ac.990b8",
    "name": "write in port",
    "serial": "69d40fb7.70bac",
    "x": 650,
    "y": 480,
    "wires": []
}, {
    "id": "4408789f.496758",
    "type": "http request",
    "z": "97c8f1ac.990b8",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "",
    "tls": "",
    "x": 810,
    "y": 620,
    "wires": [
        ["b80b6bc1.0c4a38"]
    ]
}, {
    "id": "b80b6bc1.0c4a38",
    "type": "debug",
    "z": "97c8f1ac.990b8",
    "name": "",
    "active": false,
    "console": "false",
    "complete": "payload",
    "x": 830,
    "y": 740,
    "wires": []
}, {
    "id": "7973464d.0f1c18",
    "type": "function",
    "z": "97c8f1ac.990b8",
    "name": "",
    "func": "msg.url = \"http://192.168.1.131:1880/motor\" + msg.motor;\nmsg.payload = msg.newSpeedParsed;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 630,
    "y": 620,
    "wires": [
        ["4408789f.496758"]
    ]
}, {
    "id": "a01648e5.b673d8",
    "type": "debug",
    "z": "97c8f1ac.990b8",
    "name": "Motor Data",
    "active": false,
    "console": "false",
    "complete": "mtdt",
    "x": 630,
    "y": 60,
    "wires": []
}, {
    "id": "69d40fb7.70bac",
    "type": "serial-port",
    "z": "",
    "serialport": "/dev/ttyUSB0",
    "serialbaud": "9600",
    "databits": "8",
    "parity": "none",
    "stopbits": "1",
    "newline": "\\n",
    "bin": "false",
    "out": "char",
    "addchar": false
}]