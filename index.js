const Express = require('express');
const pdf = require('html-pdf');
const ejs = require('ejs');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// instance of express defined
const app = Express();
let info;
let requestError;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.raw({type: 'application/json'}));
app.use(bodyParser.json());

//Receiving a post request at the sendEvent endpoint
app.post('/sendEvent', async (req, res) => {
    const info = JSON.parse(req.body);
    console.log(info)
    //var html = fs.readFileSync("./views/output.ejs","utf8")
    const renderedView = await ejs.renderFile('./views/output.ejs', {event: info.event}, 'cache');
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

// Listening to requests
port = process.env.PORT | 8000;
app.listen(port, () => console.log(`rsListening on port ${port}`));