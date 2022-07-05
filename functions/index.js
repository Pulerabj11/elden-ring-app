const typesense = require("typesense")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
async function search() {
    const client = new typesense.Client({
        'nodes': [{
            'host': 'p10ykefx4hnjsu72p-1.a1.typesense.net', // where xxx is the ClusterID of your Typesense Cloud cluster
            'port': '443',
            'protocol': 'https'
        }],
        'apiKey': '5tUAfECHqfVgKuVOTGsfB5z5RW4j6u65',
        'connectionTimeoutSeconds': 2
    });

    let searchParameters = {
        'q': 'bloodbone',
        'query_by': 'Lore, Name'
    }

    results = await client.collections('Ammunition').documents().search(searchParameters)

    console.log(results.hits[0].document.Name)
}

search()