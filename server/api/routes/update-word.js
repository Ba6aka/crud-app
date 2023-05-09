module.exports = { updateWord }
const { ObjectId } = require('mongodb')

async function updateWord(words, request, response) {

    let { body } = request

    const id = request.url.split(':')[1]

    const file = await words
        .updateOne({ _id: new ObjectId(id) },
            { $set: body },)

    response.end(JSON.stringify(file))
}