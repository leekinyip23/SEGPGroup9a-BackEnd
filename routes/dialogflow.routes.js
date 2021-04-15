const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const router = express.Router();
const sessionId = uuid.v4();

router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

router.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

router.post('/send-msg', (req, res) => {

    dialogflowConnection(req.body.text, req.body.isEvent)
        .then(data => {

            res.send({
                message: data.fulfillmentMessages[0].text.text[0],
                intent: data.intent.displayName
            })
        })
        .catch(err => {
            console.log("Error!")
            res.send({
                error: err
            })
        })
})

async function dialogflowConnection(msg, isEvent, projectId = 'mental-health-care-chatbo-rqfi') {
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename: "./config/mental-health-care-chatbo-rqfi-e3c6ef10a30c.json"
    });

    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    let request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: msg,
                languageCode: 'en-US'
            },
        },
    }

    if (isEvent === "true") {
        request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: msg,
                    languageCode: 'en-US',
                },
            },
        }
    }

    console.log("******************************************************************")
    console.log(request)

    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
    } else {
        console.log(`  No intent matched.`);
    }

    return result;
}

module.exports = router