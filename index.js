const Express = require('express');
const pdf = require('html-pdf');
const ejs = require('ejs');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// instance of express defined
const app = Express();
app.use( Express.static( "/public/images" ) );
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.raw({type: 'application/json'}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    console.log({"message" : "Working Fine"});
    res.send({"message" : "Working Fine"})

})
//Receiving a post request at the sendEvent endpoint
/**
 * @api {post} /sendEvent Send an Event
 * @apiName Send Event 
 * @apiGroup all
 * @apiDescription Returns a pdf of the Event form filled with information supplied by the user
 * @apiParam {object} event eventName
 * @apiParam {string} clubName clubName
 * @apiParam {string} day   Which day of the month is it
 * @apiParam {string} month Which month of the year
 * @apiParam {string} toTime Time till which event happens
 * @apiParam {string} fromTime Time from which event happens
 * @apiParam {string} duration Duration for which the event happens
 * @apiParam {string} budget Budget for the event
 * @apiParam {string} description Description of the event
 * @apiParam {string} category Category of the event
 * @apiParam {string} venue Venue for the event
 * @apiParam {string} noOfParticipants Total Number of participants in the event
 * @apiParam {object} faculty Faculty Coordinator Details (Participant Object)
 * @apiParam {object} student Student Coordinator Details (Participant Object)
 * @apiParam {string} err Error encountered
 * 
 * @apiPermission admin
 * 
 * @apiParamExample {json} request-example
 * {"event": {
 *       "clubName": "GDG",
 *       "eventName": "DEVFEST 2019",
 *       "day": "10",
 *       "month" : "June",
 *       "toTime": "10 PM",
 *       "fromTime": "11 AM",
 *       "duration": "16 ",
 *       "budget": "200000",
 *       "description": "TECHNICAL EVENT AT GDG VIT. ITS GONNA BE AMAZING.Come to have a great experience at the event and view the magic of technology at your footsteps. Expereicne all the greatness in one day and blah blah blah blah blah .......... this is just to expand my input text, I really dont promise any of this, just kidding XD. ",
 *       "category": "TECHNICAL",
 *       "venue": "ANNA AUDI",
 *       "noOfParticipants": "4000",
 *       "faculty": {
 *           "name": "Student MAA",
 *           "regNo": "17BBE1010",
 *           "email": "SDADAS@A.COM",
 *           "mobile": "919191991911",
 *           "gender": "M"
 *       },
 *       "student": {
 *           "name": "some name",
 *           "regNo": "17BBE1010",
 *         "email": "SDADAS@A.COM",
 *           "mobile": "919191991911",
 *           "gender": "M"
 *       }
 *   },
 *   "err": null
 * } 
 */
app.post('/sendEvent', async (req, res) => {
    const info = JSON.parse(req.body);
    console.log(info);
    const renderedView = await ejs.renderFile('./views/index.ejs', {event: info.event}, 'cache');
    console.log(renderedView);
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    await pdf.create(renderedView).toBuffer((err, buffer) => {
				if (err) 
						return res.json({err})
				res.set('Content-disposition', 'attachment; filename=permission.pdf');
  			res.set('Content-Type', 'application/pdf');
				res.write(buffer)
				res.end('ended')
    });

});

/**
 * @api {post} /sendExtStudent Send Event for external students
 * @apiName send event for external students
 * @apiGroup all
 * @apiParam {string} clubName Name of the club
 * @apiParam {string} eventName Name of the event
 * @apiParam {string} extAgency External Agencies involved
 * @apiParam {string} date Date of requirement
 * @apiParam {string} time Time of requirement
 * @apiParam {string} beneficiaries Beneficiaries
 * @apiParam {object} facultyAdvisor Faculty Advisor Details
 * @apiParam {string} otherDetails Other Details if required 
 * @apiPermission admin
 * 
 * @apiParamExample {json} request-example
 * {
 *    "extstudents": {
 *       "clubName": "GDG",
 *       "eventName": "GSOC",
 *       "extAgency": "Agency1 Agency2",
 *       "date": "07/02/2019",
 *       "time": "00:18 AM",
 *       "beneficiaries": "random",
 *       "facultyAdvisor": {
 *           "name": "DSCMaster",
 *           "empId": "17BEP110",
 *           "mobNo": "94029503046",
 *           "vitEmail": "useless@mail.com"
 *       },
 *       "otherDetails": "otherDetails"
 *   }
*}
 */


app.post('/sendExtStudent', async (req, res) => {
    const info1 = (JSON.parse(req.body)).extstudents;
    console.log(info1);
    const renderedView = await ejs.renderFile('./views/Students_Visiting_ouside_VIT.ejs', {info1 : info1}, 'cache');
    console.log(renderedView);
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const resp = await pdf.create(renderedView).toBuffer((err, buffer) => {
				if (err) 
						return res.json({err})
				res.set('Content-disposition', 'attachment; filename=permission.pdf');
  			res.set('Content-Type', 'application/pdf');
				res.write(buffer)
				res.end('ended')
    });

});

/**
 * @api {post} /sendExt Send event for externals
 * @apiName Send event for Externals
 * @apiGroup all
 * @apiParam {string} clubName Name of club 
 * @apiParam {string} event Event Name
 * @apiParam {object} external External Details
 * @apiParam {string} date Date of Issue
 * @apiParam {string} time Time for Issue
 * @apiParam {string} beneficiary Beneficiary
 * @apiParam {object} facultyAdvisor Faculty Advisor
 * @apiParam {string} transport Type of Transport 
 * @apiPermission admin
 * 
 * @apiParamExample {json} request-example
 * {
 *       "externals": {
 *       "clubName": "GDG",
 *       "event": "DevFest",
 *       "external": {
 *           "name": "Devmalya",
 *           "designation": "President",
 *           "organisation": "QWERT"
 *       },
 *       "date": "07/02/2019",
 *       "time": "10:32 PM",
 *       "beneficiary": "beneficiary",
 *       "facultyAdvisor": {
 *           "name": "Praveen",
 *           "empId": "183959",
 *           "mobNo": "98573285623",
 *           "email": "useless@evenmoreuseless.com"
 *       },
 *       "transport": "Car",
 *       "other": "Nothing More"
 *   }
*}
 */

app.post('/sendExt', async (req, res) => {
    console.log(req.body);
    const info3 = (JSON.parse(req.body)).externals;
    console.log(info3);
    const renderedView = await ejs.renderFile('./views/Externals_Visiting_VIT.ejs', {info3 : info3}, 'cache');
    console.log(renderedView);
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const resp = await pdf.create(renderedView).toBuffer((err, buffer) => {
				if (err) 
						return res.json({err})
				res.set('Content-disposition', 'attachment; filename=permission.pdf');
  			res.set('Content-Type', 'application/pdf');
				res.write(buffer)
				res.end('ended')
    });

});

/**
 * @api {post} /nightPermissions Nightpermission in VIT
 * @apiName Night-Permission Generator
 * @apiGroup all
 * @apiParam {string} date Date
 * @apiParam {string} clubName Name of Club
 * @apiParam {string} purpose Purpose
 * @apiParam {string} venue Venue
 * @apiParam {string} noOfRoom No of Rooms
 * @apiParam {string} fromTime Time of start of event
 * @apiParam {string} toTime Time of end of event
 * @apiParam {string} fromDate Date of starting
 * @apiParam {string} toDate Date of ending
 * @apiParam {string} comLead Community Lead
 * @apiParam {string} facCoordinator Faculty Coordinator
 * @apiPermission admin
 * 
 * @apiParamExample {json} request-example
 *{
 *   "nightpermissions": {
 *       "date": "someDate",
 *       "clubName": "someName",
 *       "purpose": "some purpose",
 *       "venue": "Sirji ka house",
 *       "noOfRoom": "1 Million",
 *       "fromTime": "12:00 AM",
 *       "toTime": "1:00 PM",
 *       "fromDate": "3rd Feb",
 *       "toDate": "10th Feb",
 *       "comLead": "Samarth Bhaiya",
 *       "facCoordinator": "Some geeky professor"
 *   }
 *}
 */

app.post('/nightPermissions', async (req, res) => {
    const info4 = (JSON.parse(req.body)).nightpermissions;
    console.log(info4);
    const renderedView = await ejs.renderFile('./views/NightRoom_Permissions.ejs', {info4 : info4}, 'cache');
    console.log(renderedView);
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const resp = await pdf.create(renderedView).toBuffer((err, buffer) => {
				if (err) 
						return res.json({err})
				res.set('Content-disposition', 'attachment; filename=permission.pdf');
  			res.set('Content-Type', 'application/pdf');
				res.write(buffer)
				res.end('ended')
    });
});


// Listening to requests
port = process.env.PORT  || 8000;
app.listen(port, () => console.log(`rsListening on port ${port}`));

