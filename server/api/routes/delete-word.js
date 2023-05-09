module.exports = { deleteWord }
const { ObjectId } = require('mongodb')

async function deleteWord(words, request, response) {

    const id = request.url.split(':')[1];
    let file = await words.deleteOne({ _id: new ObjectId(id) });

    response.end(JSON.stringify(file));
}