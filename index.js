const Express = require('express');
const pdf = require('html-pdf');
const ejs = require('ejs');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// instance of express defined
const app = Express();
app.use( Express.static( "public" ) );
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.raw({type: 'application/json'}));
app.use(bodyParser.json());

//Receiving a post request at the sendEvent endpoint
/**
 * @api {post} /sendEvent send an event
 * @apiName send event 
 * @apiGroup all
 * @apiParam {string} event eventName
 * @apiPermission admin
 * 
 */
app.post('/sendEvent', async (req, res) => {
    const info = JSON.parse(req.body);
    console.log(info);
    const renderedView = await ejs.renderFile('./views/index.ejs', {event: info.event}, 'cache');
    console.log(renderedView);
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const hash = crypto.createHash("sha1").update(currentDate + random).digest('hex') + '.pdf';
    const pdfName = path.resolve(path.join(__dirname, hash));
    await pdf.create(renderedView).toFile(pdfName, (err, resp) => {
        console.log(pdfName);
        res.download(pdfName, 'event.pdf', () => {
            fs.unlink(pdfName, (err) => {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            });
        });
    });

});

app.post('/sendExtStudent', async (req, res) => {
    const info1 = (JSON.parse(req.body)).extstudents;
    console.log(info1);
    const renderedView = await ejs.renderFile('./views/Students_Visiting_ouside_VIT.ejs', {info1 : info1}, 'cache');
    console.log(renderedView);
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const hash = crypto.createHash("sha1").update(currentDate + random).digest('hex') + '.pdf';
    const pdfName = path.resolve(path.join(__dirname, hash));
    const resp = await pdf.create(renderedView).toFile(pdfName, () => {
        console.log(pdfName);
        res.download(pdfName, 'ext_stud_event.pdf', () => {
            fs.unlink(pdfName, (err) => {
                if (err) throw err;
                console.log('File deleted!');
            });
        });
    });

});
app.post('/sendExt', async (req, res) => {
    console.log(req.body);
    const info3 = (JSON.parse(req.body)).externals;
    console.log(info3);
    const renderedView = await ejs.renderFile('./views/Externals_Visiting_VIT.ejs', {info3 : info3}, 'cache');
    console.log(renderedView);
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const hash = crypto.createHash("sha1").update(currentDate + random).digest('hex') + '.pdf';
    const pdfName = path.resolve(path.join(__dirname, hash));
    const resp = await pdf.create(renderedView).toFile(pdfName, () => {
        console.log(pdfName);
        res.download(pdfName, 'ext_event.pdf', () => {
            fs.unlink(pdfName, (err) => {
                if (err) throw err;
                console.log('File deleted!');
            });
        });
    });

});
app.post('/nightPermissions', async (req, res) => {
    const info4 = (JSON.parse(req.body)).nightpermissions;
    console.log(info4);
    const renderedView = await ejs.renderFile('./views/NightRoom_Permissions.ejs', {info4 : info4}, 'cache');
    console.log(renderedView);
    fs.writeFile('Just_Delete_me.html',renderedView, 'utf8', (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Task done!');
    });
    const currentDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    const hash = crypto.createHash("sha1").update(currentDate + random).digest('hex') + '.pdf';
    const pdfName = path.resolve(path.join(__dirname, hash));
    await pdf.create(renderedView).toFile(pdfName, (err, resp) => {
        console.log(pdfName);
        res.download(pdfName, 'Night_Permissions.pdf', () => {
            fs.unlink(pdfName, (err) => {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            });
        });
    });

});


// Listening to requests
port = process.env.PORT | 8000;
app.listen(port, () => console.log(`rsListening on port ${port}`));