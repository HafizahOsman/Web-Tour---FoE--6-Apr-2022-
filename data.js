var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.03107819737919293,
          "pitch": -0.16710932836808468,
          "rotation": 6.283185307179586,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.17150543171270627,
          "pitch": 0.2831829908901504,
          "title": "Welcome",
          "text": "Join this web tour to find out more about the Faculty of Engineering (FoE)!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.050561801582459154,
        "pitch": 0.011174673845186334,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.23893346560043227,
          "pitch": 0.024500792146614714,
          "rotation": 7.0685834705770345,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.038240542742983,
          "pitch": -0.09428546584522124,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2923068741485757,
          "pitch": -0.12250779462875094,
          "title": "This is where it all begins!",
          "text": "Find out what else the FoE has in store for you right here.&nbsp;"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.6348012528692646,
        "pitch": 0.14265247297141315,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 3.1404168079618042,
          "pitch": 0.05495889471009363,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9895276184573607,
          "pitch": 0.21731001572869957,
          "title": "Study, Study, Study",
          "text": "Our hardworking students, making full use of their time."
        },
        {
          "yaw": -1.8664435208866834,
          "pitch": 0.1660657261808467,
          "title": "Have a Cuppa",
          "text": "Coffee is a student's best friend. This is where they refuel and recharge.&nbsp;"
        }
      ]
    }
  ],
  "name": "FOE - Hafizah's Project",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
