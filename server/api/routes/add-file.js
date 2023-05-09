module.exports = { addWord }

async function addWord(words, request, response) {
    const { body } = request

    const word = await words.insertOne(body);
    body._id = word.insertedId;
    const fil = JSON.stringify(body);

    response.end(fil);

}