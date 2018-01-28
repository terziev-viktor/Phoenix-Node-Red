[{
    "id": "d323a838.da3d28",
    "type": "http in",
    "z": "a67a93af.b2938",
    "name": "Update",
    "url": "/update",
    "method": "post",
    "upload": false,
    "swaggerDoc": "",
    "x": 70,
    "y": 20,
    "wires": [
        ["25174ee5.4b2f92", "502e819d.a599b"]
    ]
}, {
    "id": "4c82e2bd.d0d60c",
    "type": "function",
    "z": "a67a93af.b2938",
    "name": "Update Data object",
    "func": "var data = global.get('motor_data');\nvar motor = msg.payload[0];\nvar gear = msg.payload[2];\ndata[\"\"+motor] = \"\"+gear;\nmsg.motor = motor;\nmsg.payload = data;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 490,
    "y": 20,
    "wires": [
        ["66390f86.6035c"]
    ]
}, {
    "id": "7187bfe8.e886e",
    "type": "serial out",
    "z": "a67a93af.b2938",
    "name": "write in port",
    "serial": "69d40fb7.70bac",
    "x": 750,
    "y": 80,
    "wires": []
}, {
    "id": "56a115c8.0d403c",
    "type": "function",
    "z": "a67a93af.b2938",
    "name": "Parse",
    "func": "msg.motor_data = global.get('motor_data');\nvar randomSpeed = msg.payload;\nmsg.newSpeed = 556 - (randomSpeed - 37); // 1 % 556\n\nif(randomSpeed % 2) {\n    randomSpeed = 1149 - (randomSpeed - 37);\n}\nmsg.payload = msg.motor + \" \" + randomSpeed;\nreturn msg;",
    "outputs": "1",
    "noerr": 0,
    "x": 510,
    "y": 160,
    "wires": [
        ["7187bfe8.e886e", "b6e9850d.9af3b8", "59e4d4f.a6c442c"]
    ]
}, {
    "id": "2ab79c25.584a64",
    "type": "exec",
    "z": "a67a93af.b2938",
    "command": "python phoenix/randomNumber.py ",
    "addpay": true,
    "append": "",
    "useSpawn": "false",
    "timer": "",
    "oldrc": false,
    "name": "randNum",
    "x": 360,
    "y": 160,
    "wires": [
        ["56a115c8.0d403c"],
        [],
        []
    ]
}, {
    "id": "66390f86.6035c",
    "type": "function",
    "z": "a67a93af.b2938",
    "name": "Prase",
    "func": "var data = global.get('motor_data');\nvar speeds = global.get('speeds')\nvar gear = data[msg.motor] - 1;\n\nmin = speeds[\"\"+gear][0];\nmax = speeds[\"\"+gear][1];\nmsg.payload = \" \" + min + \" \" + max;\n\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 190,
    "y": 180,
    "wires": [
        ["2ab79c25.584a64", "c673a9e5.ae2678"]
    ]
}, {
    "id": "502e819d.a599b",
    "type": "http response",
    "z": "a67a93af.b2938",
    "name": "",
    "statusCode": "200",
    "headers": {},
    "x": 260,
    "y": 60,
    "wires": []
}, {
    "id": "25174ee5.4b2f92",
    "type": "function",
    "z": "a67a93af.b2938",
    "name": "Set motor Data",
    "func": "var data = global.get('motor_data');\nif(!data) {\n    global.set('motor_data', {\n        \"0\": \"1\",\n        \"1\": \"1\",\n        \"2\": \"1\",\n        \"3\": \"1\",\n        \"4\": \"1\"\n    });\n}\nvar speeds = global.get('speeds');\nif(!speeds) {\n    global.set('speeds', [[452, 592],[313, 451],[176, 312],[37, 175]]);\n}\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 280,
    "y": 20,
    "wires": [
        ["4c82e2bd.d0d60c"]
    ]
}, {
    "id": "59e4d4f.a6c442c",
    "type": "debug",
    "z": "a67a93af.b2938",
    "name": "",
    "active": false,
    "console": "false",
    "complete": "payload",
    "x": 750,
    "y": 40,
    "wires": []
}, {
    "id": "6c462318.72c0cc",
    "type": "http request",
    "z": "a67a93af.b2938",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "",
    "tls": "",
    "x": 730,
    "y": 260,
    "wires": [
        ["a161ef44.0041e"]
    ]
}, {
    "id": "b6e9850d.9af3b8",
    "type": "function",
    "z": "a67a93af.b2938",
    "name": "",
    "func": "msg.url = \"http://192.168.1.131:1880/motor\" + msg.motor;\nmsg.payload = msg.newSpeed;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 577.5,
    "y": 253.39999389648438,
    "wires": [
        ["6c462318.72c0cc"]
    ]
}, {
    "id": "a161ef44.0041e",
    "type": "debug",
    "z": "a67a93af.b2938",
    "name": "",
    "active": false,
    "console": "false",
    "complete": "payload",
    "x": 912.5,
    "y": 255.60000610351562,
    "wires": []
}, {
    "id": "c673a9e5.ae2678",
    "type": "debug",
    "z": "a67a93af.b2938",
    "name": "",
    "active": false,
    "console": "false",
    "complete": "false",
    "x": 373.5,
    "y": 298.6000061035156,
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