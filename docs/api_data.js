define({ "api": [
  {
    "type": "post",
    "url": "/nightPermissions",
    "title": "Nightpermission for club related and lab activities in VIT",
    "name": "Night_Permission_Generator",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "clubName",
            "description": "<p>Name of Club</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": "<p>Purpose</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "venue",
            "description": "<p>Venue</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "noOfRoom",
            "description": "<p>No of Rooms</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fromTime",
            "description": "<p>Time of start of event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "toTime",
            "description": "<p>Time of end of event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Date of starting</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "toDate",
            "description": "<p>Date of ending</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comLead",
            "description": "<p>Community Lead</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "facCoordinator",
            "description": "<p>Faculty Coordinator</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n  \"nightpermissions\": {\n      \"date\": \"someDate\",\n      \"clubName\": \"someName\",\n      \"purpose\": \"some purpose\",\n      \"venue\": \"Sirji ka house\",\n      \"noOfRoom\": \"1 Million\",\n      \"fromTime\": \"12:00 AM\",\n      \"toTime\": \"1:00 PM\",\n      \"fromDate\": \"3rd Feb\",\n      \"toDate\": \"10th Feb\",\n      \"comLead\": \"Samarth Bhaiya\",\n      \"facCoordinator\": \"Some geeky professor\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "all",
    "sampleRequest": [
      {
        "url": "https://localhost/nightPermissions"
      }
    ]
  },
  {
    "type": "post",
    "url": "/sendEvent",
    "title": "send an event",
    "name": "Send_Event",
    "group": "all",
    "description": "<p>Returns a pdf of the Event form filled with information supplied by the user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>eventName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "clubName",
            "description": "<p>clubName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "day",
            "description": "<p>Which day of the month is it</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "month",
            "description": "<p>Which month of the year</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "toTime",
            "description": "<p>Time till which event happens</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fromTime",
            "description": "<p>Time from which event happens</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration for which the event happens</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "budget",
            "description": "<p>Budget for the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "venue",
            "description": "<p>Venue for the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "noOfParticipants",
            "description": "<p>Total Number of participants in the event</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "faculty",
            "description": "<p>Faculty Coordinator Details (Participant Object)</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "student",
            "description": "<p>Student Coordinator Details (Participant Object)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "err",
            "description": "<p>Error encountered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\"event\": {\n      \"clubName\": \"GDG\",\n      \"eventName\": \"DEVFEST 2019\",\n      \"day\": \"10\",\n      \"month\" : \"June\",\n      \"toTime\": \"10 PM\",\n      \"fromTime\": \"11 AM\",\n      \"duration\": \"16 \",\n      \"budget\": \"200000\",\n      \"description\": \"TECHNICAL EVENT AT GDG VIT. ITS GONNA BE AMAZING.Come to have a great experience at the event and view the magic of technology at your footsteps. Expereicne all the greatness in one day and blah blah blah blah blah .......... this is just to expand my input text, I really dont promise any of this, just kidding XD. \",\n      \"category\": \"TECHNICAL\",\n      \"venue\": \"ANNA AUDI\",\n      \"noOfParticipants\": \"4000\",\n      \"faculty\": {\n          \"name\": \"Student MAA\",\n          \"regNo\": \"17BBE1010\",\n          \"email\": \"SDADAS@A.COM\",\n          \"mobile\": \"919191991911\",\n          \"gender\": \"M\"\n      },\n      \"student\": {\n          \"name\": \"some name\",\n          \"regNo\": \"17BBE1010\",\n        \"email\": \"SDADAS@A.COM\",\n          \"mobile\": \"919191991911\",\n          \"gender\": \"M\"\n      }\n  },\n  \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "all",
    "sampleRequest": [
      {
        "url": "https://localhost/sendEvent"
      }
    ]
  },
  {
    "type": "post",
    "url": "/sendExt",
    "title": "send an event for externals outside VIT",
    "name": "Send_event_for_Externals",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "clubName",
            "description": "<p>Name of club</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event",
            "description": "<p>Event Name</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "external",
            "description": "<p>External Details</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>Date of Issue</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>Time for Issue</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "beneficiary",
            "description": "<p>Beneficiary</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "facultyAdvisor",
            "description": "<p>Faculty Advisor</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "transport",
            "description": "<p>Type of Transport</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n      \"externals\": {\n      \"clubName\": \"GDG\",\n      \"event\": \"DevFest\",\n      \"external\": {\n          \"name\": \"Devmalya\",\n          \"designation\": \"President\",\n          \"organisation\": \"QWERT\"\n      },\n      \"date\": \"07/02/2019\",\n      \"time\": \"10:32 PM\",\n      \"beneficiary\": \"beneficiary\",\n      \"facultyAdvisor\": {\n          \"name\": \"Praveen\",\n          \"empId\": \"183959\",\n          \"mobNo\": \"98573285623\",\n          \"email\": \"useless@evenmoreuseless.com\"\n      },\n      \"transport\": \"Car\",\n      \"other\": \"Nothing More\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "all",
    "sampleRequest": [
      {
        "url": "https://localhost/sendExt"
      }
    ]
  },
  {
    "type": "post",
    "url": "/sendExtStudent",
    "title": "send an event for external students outside VIT",
    "name": "send_event_for_external_students",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "clubName",
            "description": "<p>Name of the club</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventName",
            "description": "<p>Name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "extAgency",
            "description": "<p>External Agencies involved</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>Date of requirement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>Time of requirement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "beneficiaries",
            "description": "<p>Beneficiaries</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "facultyAdvisor",
            "description": "<p>Faculty Advisor Details</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "otherDetails",
            "description": "<p>Other Details if required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n   \"extstudents\": {\n      \"clubName\": \"GDG\",\n      \"eventName\": \"GSOC\",\n      \"extAgency\": \"Agency1 Agency2\",\n      \"date\": \"07/02/2019\",\n      \"time\": \"00:18 AM\",\n      \"beneficiaries\": \"random\",\n      \"facultyAdvisor\": {\n          \"name\": \"DSCMaster\",\n          \"empId\": \"17BEP110\",\n          \"mobNo\": \"94029503046\",\n          \"vitEmail\": \"useless@mail.com\"\n      },\n      \"otherDetails\": \"otherDetails\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "all",
    "sampleRequest": [
      {
        "url": "https://localhost/sendExtStudent"
      }
    ]
  }
] });
