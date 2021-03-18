const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const { json } = require('body-parser');
//const { router } = require('../app');
const sessionId = uuid.v4();
router.use(bodyParser.urlencoded({
    extended: true

router.use(bodyParser.json());

});

                mood = 0
            } else if (data.intent.displayName.includes("Positive")) {
                mood = 1
            }

            if (data.intent.displayName === "Negative-Share(Yes)" ||
                data.intent.displayName === "Negative-Share(Yes)-ContinueShare(Yes)" ||
                data.intent.displayName === "Neutral(No)-Journal(Yes)" ||
                data.intent.displayName === "Positive-Share(Yes)"

            ) {
                isSaveJournal = true
            }

            if (data.intent.displayName === "Negative-Share(Yes)-ContinueShare(Yes)-Journal(Yes)-End" ||
                data.intent.displayName === "Negative-Share(Yes)-ContinueShare(No)-Journal(Yes)-End" ||
                data.intent.displayName === "Neutral(No)-Journal(Yes)-End" ||
                data.intent.displayName === "Positive-Share(Yes)-Journal(Yes)-End"
            ) {
                isSaveToDB = true
            }

            res.send({
                message: data.fulfillmentMessages,
                mood: mood,
                isSaveJournal: isSaveJournal,
                isSaveToDB: isSaveToDB
            })
            // res.json({
            //     "message": `${data}`
            // })
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
        keyFilename: "./mental-health-care-chatbo-rqfi-e3c6ef10a30c.json"
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