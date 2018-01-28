[{
    "id": "cbbe3571.2977c8",
    "type": "ui_gauge",
    "z": "d3805ce0.457cb",
    "name": "Дясна Ръка",
    "group": "3bb49fd2.84a1f",
    "order": 0,
    "width": "0",
    "height": "0",
    "gtype": "gage",
    "title": "",
    "label": "Скорост",
    "format": "{{value | number:1}}%",
    "min": "0",
    "max": "100",
    "colors": ["#00b500", "#e6e600", "#ca3838"],
    "seg1": "",
    "seg2": "",
    "x": 710,
    "y": 120,
    "wires": []
}, {
    "id": "3ac0d384.4b522c",
    "type": "ui_gauge",
    "z": "d3805ce0.457cb",
    "name": "Лява Ръка",
    "group": "842d7e8.92fea8",
    "order": 1,
    "width": "0",
    "height": "0",
    "gtype": "gage",
    "title": "",
    "label": "Скорост",
    "format": "{{value | number:1}}%",
    "min": "0",
    "max": "100",
    "colors": ["#00b500", "#e6e600", "#ca3838"],
    "seg1": "",
    "seg2": "",
    "x": 710,
    "y": 460,
    "wires": []
}, {
    "id": "6c23d3ff.56f3dc",
    "type": "ui_gauge",
    "z": "d3805ce0.457cb",
    "name": "Десен Крак",
    "group": "3f73bee9.079f62",
    "order": 1,
    "width": "0",
    "height": "0",
    "gtype": "gage",
    "title": "",
    "label": "Скорост",
    "format": "{{value | number:1}}%",
    "min": "0",
    "max": "100",
    "colors": ["#00b500", "#e6e600", "#ca3838"],
    "seg1": "",
    "seg2": "",
    "x": 670,
    "y": 760,
    "wires": []
}, {
    "id": "fc38c168.9a8fa",
    "type": "ui_gauge",
    "z": "d3805ce0.457cb",
    "name": "Ляв Крак",
    "group": "4eee0ed3.c7d22",
    "order": 1,
    "width": "0",
    "height": "0",
    "gtype": "gage",
    "title": "",
    "label": "Скорост",
    "format": "{{value | number:1}}%",
    "min": "0",
    "max": "100",
    "colors": ["#00b500", "#e6e600", "#ca3838"],
    "seg1": "",
    "seg2": "",
    "x": 720,
    "y": 1020,
    "wires": []
}, {
    "id": "4bb3cfbb.fb925",
    "type": "ui_gauge",
    "z": "d3805ce0.457cb",
    "name": "Седло",
    "group": "3986b35e.0ab37c",
    "order": 1,
    "width": "0",
    "height": "0",
    "gtype": "gage",
    "title": "",
    "label": "Скорост",
    "format": "{{value | number:1}}%",
    "min": "0",
    "max": "100",
    "colors": ["#00b500", "#e6e600", "#ca3838"],
    "seg1": "",
    "seg2": "",
    "x": 590,
    "y": 1260,
    "wires": []
}, {
    "id": "a990458d.998758",
    "type": "ui_switch",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Включен",
    "group": "3bb49fd2.84a1f",
    "order": 0,
    "width": 0,
    "height": 0,
    "passthru": false,
    "decouple": "false",
    "topic": "",
    "style": "",
    "onvalue": "true",
    "onvalueType": "bool",
    "onicon": "",
    "oncolor": "",
    "offvalue": "false",
    "offvalueType": "bool",
    "officon": "",
    "offcolor": "",
    "x": 320,
    "y": 40,
    "wires": [
        ["9fcaafdb.10df5"]
    ]
}, {
    "id": "b0c8cef5.8728c",
    "type": "ui_numeric",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Скорост",
    "group": "3bb49fd2.84a1f",
    "order": 0,
    "width": 0,
    "height": 0,
    "passthru": false,
    "topic": "",
    "format": "{{value}}",
    "min": "1",
    "max": "4",
    "step": 1,
    "x": 320,
    "y": 80,
    "wires": [
        ["afd00761.6f0648"]
    ]
}, {
    "id": "daa43d12.8a4d9",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 670,
    "y": 40,
    "wires": [
        ["1a2978d7.9ac817"]
    ]
}, {
    "id": "1a2978d7.9ac817",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "payload",
    "x": 830,
    "y": 40,
    "wires": []
}, {
    "id": "9fcaafdb.10df5",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"0 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 490,
    "y": 40,
    "wires": [
        ["daa43d12.8a4d9"]
    ]
}, {
    "id": "afd00761.6f0648",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"0 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 470,
    "y": 80,
    "wires": [
        ["b9c34b67.c06dc8"]
    ]
}, {
    "id": "2821d1d7.3e911e",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 790,
    "y": 80,
    "wires": []
}, {
    "id": "b9c34b67.c06dc8",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 610,
    "y": 80,
    "wires": [
        ["2821d1d7.3e911e"]
    ]
}, {
    "id": "283e253e.0267ba",
    "type": "ui_numeric",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Скорост",
    "group": "842d7e8.92fea8",
    "order": 3,
    "width": 0,
    "height": 0,
    "passthru": false,
    "topic": "",
    "format": "{{value}}",
    "min": "1",
    "max": "4",
    "step": 1,
    "x": 320,
    "y": 420,
    "wires": [
        ["2873252f.cffd7a"]
    ]
}, {
    "id": "2873252f.cffd7a",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"1 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 470,
    "y": 420,
    "wires": [
        ["e24991c7.2b11e"]
    ]
}, {
    "id": "e24991c7.2b11e",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 610,
    "y": 420,
    "wires": [
        ["5ed0ff5a.9b463"]
    ]
}, {
    "id": "5ed0ff5a.9b463",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 790,
    "y": 420,
    "wires": []
}, {
    "id": "fe6c8e19.d35d2",
    "type": "ui_numeric",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Скорост",
    "group": "3f73bee9.079f62",
    "order": 3,
    "width": 0,
    "height": 0,
    "passthru": false,
    "topic": "",
    "format": "{{value}}",
    "min": "1",
    "max": "4",
    "step": 1,
    "x": 320,
    "y": 720,
    "wires": [
        ["89d68b5c.5aa578"]
    ]
}, {
    "id": "89d68b5c.5aa578",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"2 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 470,
    "y": 720,
    "wires": [
        ["cb71c30f.8523f"]
    ]
}, {
    "id": "cb71c30f.8523f",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 630,
    "y": 720,
    "wires": [
        ["a51d3200.bdd4d"]
    ]
}, {
    "id": "a51d3200.bdd4d",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 810,
    "y": 720,
    "wires": []
}, {
    "id": "ac5f8061.1e5b7",
    "type": "ui_numeric",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Скорост",
    "group": "4eee0ed3.c7d22",
    "order": 3,
    "width": 0,
    "height": 0,
    "passthru": false,
    "topic": "",
    "format": "{{value}}",
    "min": "1",
    "max": "4",
    "step": 1,
    "x": 320,
    "y": 960,
    "wires": [
        ["233cd2f4.dffefe"]
    ]
}, {
    "id": "233cd2f4.dffefe",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"3 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 470,
    "y": 960,
    "wires": [
        ["b13d23d2.aa40c"]
    ]
}, {
    "id": "b13d23d2.aa40c",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 630,
    "y": 960,
    "wires": [
        ["856f8e27.3aad1"]
    ]
}, {
    "id": "856f8e27.3aad1",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 830,
    "y": 960,
    "wires": []
}, {
    "id": "34aaa29f.9b64de",
    "type": "ui_numeric",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Скорост",
    "group": "3986b35e.0ab37c",
    "order": 3,
    "width": 0,
    "height": 0,
    "passthru": false,
    "topic": "",
    "format": "{{value}}",
    "min": "1",
    "max": "4",
    "step": 1,
    "x": 300,
    "y": 1200,
    "wires": [
        ["75ca91f9.ceef"]
    ]
}, {
    "id": "75ca91f9.ceef",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"4 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 450,
    "y": 1200,
    "wires": [
        ["8922d08e.d3e29"]
    ]
}, {
    "id": "8922d08e.d3e29",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 610,
    "y": 1200,
    "wires": [
        ["c10716b4.7ad718"]
    ]
}, {
    "id": "c10716b4.7ad718",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "false",
    "x": 810,
    "y": 1200,
    "wires": []
}, {
    "id": "293ed9ec.f08456",
    "type": "ui_switch",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Включен",
    "group": "842d7e8.92fea8",
    "order": 2,
    "width": 0,
    "height": 0,
    "passthru": false,
    "decouple": "false",
    "topic": "",
    "style": "",
    "onvalue": "true",
    "onvalueType": "bool",
    "onicon": "",
    "oncolor": "",
    "offvalue": "false",
    "offvalueType": "bool",
    "officon": "",
    "offcolor": "",
    "x": 320,
    "y": 380,
    "wires": [
        ["f571820a.8155a"]
    ]
}, {
    "id": "30449b3a.6f6454",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 670,
    "y": 380,
    "wires": [
        ["2f62466a.0a756a"]
    ]
}, {
    "id": "2f62466a.0a756a",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "payload",
    "x": 830,
    "y": 380,
    "wires": []
}, {
    "id": "f571820a.8155a",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"1 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 490,
    "y": 380,
    "wires": [
        ["30449b3a.6f6454"]
    ]
}, {
    "id": "e4dfecfd.d3256",
    "type": "ui_switch",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Включен",
    "group": "3f73bee9.079f62",
    "order": 2,
    "width": 0,
    "height": 0,
    "passthru": false,
    "decouple": "false",
    "topic": "",
    "style": "",
    "onvalue": "true",
    "onvalueType": "bool",
    "onicon": "",
    "oncolor": "",
    "offvalue": "false",
    "offvalueType": "bool",
    "officon": "",
    "offcolor": "",
    "x": 320,
    "y": 680,
    "wires": [
        ["1629178.0ae1fe9"]
    ]
}, {
    "id": "c07ac8af.60caa8",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 670,
    "y": 680,
    "wires": [
        ["5d900a1.6fd8af4"]
    ]
}, {
    "id": "5d900a1.6fd8af4",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "payload",
    "x": 830,
    "y": 680,
    "wires": []
}, {
    "id": "1629178.0ae1fe9",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"2 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 490,
    "y": 680,
    "wires": [
        ["c07ac8af.60caa8"]
    ]
}, {
    "id": "d3cd3fe3.71e9a",
    "type": "ui_switch",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Включен",
    "group": "4eee0ed3.c7d22",
    "order": 2,
    "width": 0,
    "height": 0,
    "passthru": false,
    "decouple": "false",
    "topic": "",
    "style": "",
    "onvalue": "true",
    "onvalueType": "bool",
    "onicon": "",
    "oncolor": "",
    "offvalue": "false",
    "offvalueType": "bool",
    "officon": "",
    "offcolor": "",
    "x": 320,
    "y": 920,
    "wires": [
        ["8c52a8c8.7a2138"]
    ]
}, {
    "id": "b7fafb65.146848",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 670,
    "y": 920,
    "wires": [
        ["6af376d0.58d648"]
    ]
}, {
    "id": "6af376d0.58d648",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "payload",
    "x": 830,
    "y": 920,
    "wires": []
}, {
    "id": "8c52a8c8.7a2138",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"3 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 490,
    "y": 920,
    "wires": [
        ["b7fafb65.146848"]
    ]
}, {
    "id": "aead0b03.44e8e8",
    "type": "ui_switch",
    "z": "d3805ce0.457cb",
    "name": "",
    "label": "Включен",
    "group": "3986b35e.0ab37c",
    "order": 2,
    "width": 0,
    "height": 0,
    "passthru": false,
    "decouple": "false",
    "topic": "",
    "style": "",
    "onvalue": "true",
    "onvalueType": "bool",
    "onicon": "",
    "oncolor": "",
    "offvalue": "false",
    "offvalueType": "bool",
    "officon": "",
    "offcolor": "",
    "x": 300,
    "y": 1160,
    "wires": [
        ["c5131778.68e2a8"]
    ]
}, {
    "id": "2fc9cfea.b0679",
    "type": "http request",
    "z": "d3805ce0.457cb",
    "name": "",
    "method": "POST",
    "ret": "txt",
    "url": "http://192.168.1.131:1880/update",
    "tls": "",
    "x": 650,
    "y": 1160,
    "wires": [
        ["2c533565.f54f1a"]
    ]
}, {
    "id": "2c533565.f54f1a",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "",
    "active": true,
    "console": "false",
    "complete": "payload",
    "x": 810,
    "y": 1160,
    "wires": []
}, {
    "id": "c5131778.68e2a8",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = \"4 \" + msg.payload;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 470,
    "y": 1160,
    "wires": [
        ["2fc9cfea.b0679"]
    ]
}, {
    "id": "3891e706.ae88b8",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "1",
    "payloadType": "num",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 110,
    "y": 80,
    "wires": [
        ["b0c8cef5.8728c"]
    ]
}, {
    "id": "16389e25.1362e2",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "true",
    "payloadType": "bool",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 110,
    "y": 40,
    "wires": [
        ["a990458d.998758"]
    ]
}, {
    "id": "755d6590.01a34c",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "1",
    "payloadType": "num",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 110,
    "y": 420,
    "wires": [
        ["283e253e.0267ba"]
    ]
}, {
    "id": "2c6a0f1a.20ad7",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "true",
    "payloadType": "bool",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 110,
    "y": 380,
    "wires": [
        ["293ed9ec.f08456"]
    ]
}, {
    "id": "2f89edcd.063322",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "1",
    "payloadType": "num",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 90,
    "y": 720,
    "wires": [
        ["fe6c8e19.d35d2"]
    ]
}, {
    "id": "60177332.0561bc",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "true",
    "payloadType": "bool",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 90,
    "y": 660,
    "wires": [
        ["e4dfecfd.d3256"]
    ]
}, {
    "id": "5956675a.0a5528",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "1",
    "payloadType": "num",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 90,
    "y": 960,
    "wires": [
        ["ac5f8061.1e5b7"]
    ]
}, {
    "id": "41d42895.6e0758",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "true",
    "payloadType": "bool",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 90,
    "y": 900,
    "wires": [
        ["d3cd3fe3.71e9a"]
    ]
}, {
    "id": "dc379b49.9743a8",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "1",
    "payloadType": "num",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 90,
    "y": 1200,
    "wires": [
        ["34aaa29f.9b64de"]
    ]
}, {
    "id": "e1ac57fc.f1cfb8",
    "type": "inject",
    "z": "d3805ce0.457cb",
    "name": "",
    "topic": "",
    "payload": "true",
    "payloadType": "bool",
    "repeat": "",
    "crontab": "",
    "once": true,
    "x": 90,
    "y": 1140,
    "wires": [
        ["aead0b03.44e8e8"]
    ]
}, {
    "id": "c3aaf0d7.9f718",
    "type": "http in",
    "z": "d3805ce0.457cb",
    "name": "",
    "url": "/motor0",
    "method": "post",
    "upload": false,
    "swaggerDoc": "",
    "x": 250,
    "y": 120,
    "wires": [
        ["2b84c7cb.dd0b28", "60177826.7cc238"]
    ]
}, {
    "id": "d69c0d69.be6f7",
    "type": "http in",
    "z": "d3805ce0.457cb",
    "name": "",
    "url": "/motor1",
    "method": "post",
    "upload": false,
    "swaggerDoc": "",
    "x": 250,
    "y": 460,
    "wires": [
        ["d3b53078.01d53", "a4d3ea9a.fa3038"]
    ]
}, {
    "id": "8effe443.ed6da8",
    "type": "http in",
    "z": "d3805ce0.457cb",
    "name": "",
    "url": "/motor2",
    "method": "post",
    "upload": false,
    "swaggerDoc": "",
    "x": 290,
    "y": 760,
    "wires": [
        ["15bd59a7.c093f6", "4671c757.9af078"]
    ]
}, {
    "id": "1647a53.c00b65b",
    "type": "http in",
    "z": "d3805ce0.457cb",
    "name": "",
    "url": "/motor3",
    "method": "post",
    "upload": false,
    "swaggerDoc": "",
    "x": 290,
    "y": 1020,
    "wires": [
        ["e1df126.481edf", "9f600be.fcf59f8"]
    ]
}, {
    "id": "25a8426d.97f58e",
    "type": "http in",
    "z": "d3805ce0.457cb",
    "name": "",
    "url": "/motor4",
    "method": "post",
    "upload": false,
    "swaggerDoc": "",
    "x": 270,
    "y": 1260,
    "wires": [
        ["52506f62.e4a5e", "950408a0.1700a8"]
    ]
}, {
    "id": "d3b53078.01d53",
    "type": "http response",
    "z": "d3805ce0.457cb",
    "name": "",
    "statusCode": "",
    "headers": {},
    "x": 510,
    "y": 500,
    "wires": []
}, {
    "id": "15bd59a7.c093f6",
    "type": "http response",
    "z": "d3805ce0.457cb",
    "name": "",
    "statusCode": "",
    "headers": {},
    "x": 430,
    "y": 840,
    "wires": []
}, {
    "id": "e1df126.481edf",
    "type": "http response",
    "z": "d3805ce0.457cb",
    "name": "",
    "statusCode": "",
    "headers": {},
    "x": 510,
    "y": 1060,
    "wires": []
}, {
    "id": "52506f62.e4a5e",
    "type": "http response",
    "z": "d3805ce0.457cb",
    "name": "",
    "statusCode": "",
    "headers": {},
    "x": 450,
    "y": 1300,
    "wires": []
}, {
    "id": "2b84c7cb.dd0b28",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = (msg.payload / 556)*100;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 490,
    "y": 120,
    "wires": [
        ["9a64b4b.7071348", "cbbe3571.2977c8"]
    ]
}, {
    "id": "a4d3ea9a.fa3038",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = (msg.payload / 556) * 100;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 510,
    "y": 460,
    "wires": [
        ["3ac0d384.4b522c"]
    ]
}, {
    "id": "4671c757.9af078",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = (msg.payload / 556) * 100;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 490,
    "y": 760,
    "wires": [
        ["6c23d3ff.56f3dc"]
    ]
}, {
    "id": "9f600be.fcf59f8",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = (msg.payload / 556) * 100;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 510,
    "y": 1020,
    "wires": [
        ["fc38c168.9a8fa"]
    ]
}, {
    "id": "950408a0.1700a8",
    "type": "function",
    "z": "d3805ce0.457cb",
    "name": "",
    "func": "msg.payload = (msg.payload / 556) * 100;\nreturn msg;",
    "outputs": 1,
    "noerr": 0,
    "x": 450,
    "y": 1260,
    "wires": [
        ["4bb3cfbb.fb925"]
    ]
}, {
    "id": "9a64b4b.7071348",
    "type": "debug",
    "z": "d3805ce0.457cb",
    "name": "PARSE 0",
    "active": true,
    "console": "false",
    "complete": "payload",
    "x": 840,
    "y": 200,
    "wires": []
}, {
    "id": "60177826.7cc238",
    "type": "http response",
    "z": "d3805ce0.457cb",
    "name": "",
    "statusCode": "",
    "headers": {},
    "x": 450,
    "y": 180,
    "wires": []
}, {
    "id": "3bb49fd2.84a1f",
    "type": "ui_group",
    "z": "",
    "name": "Дясна Ръка",
    "tab": "f7ed75eb.72ad08",
    "disp": true,
    "width": "7"
}, {
    "id": "842d7e8.92fea8",
    "type": "ui_group",
    "z": "",
    "name": "Лява Ръка",
    "tab": "f7ed75eb.72ad08",
    "order": 2,
    "disp": true,
    "width": "7"
}, {
    "id": "3f73bee9.079f62",
    "type": "ui_group",
    "z": "",
    "name": "Десен Крак",
    "tab": "f7ed75eb.72ad08",
    "order": 3,
    "disp": true,
    "width": "7"
}, {
    "id": "4eee0ed3.c7d22",
    "type": "ui_group",
    "z": "",
    "name": "Ляв Крак",
    "tab": "f7ed75eb.72ad08",
    "order": 4,
    "disp": true,
    "width": "7"
}, {
    "id": "3986b35e.0ab37c",
    "type": "ui_group",
    "z": "",
    "name": "Дупенце",
    "tab": "f7ed75eb.72ad08",
    "order": 5,
    "disp": true,
    "width": "7"
}, {
    "id": "f7ed75eb.72ad08",
    "type": "ui_tab",
    "z": "",
    "name": "Phoenix",
    "icon": "dashboard",
    "order": 1
}]